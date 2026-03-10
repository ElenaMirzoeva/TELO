-- ═══════════════════════════════════════════════
--  ТЕЛО — настройка Supabase
-- ═══════════════════════════════════════════════
--  1. Создай проект на https://supabase.com
--  2. Открой SQL Editor в дашборде Supabase
--  3. Вставь этот скрипт целиком и нажми Run
--  4. Скопируй Project URL и anon key из Settings → API
--  5. Вставь их в app.js (SUPABASE_URL, SUPABASE_ANON_KEY)
--  6. В Authentication → Settings → отключи "Confirm email"
--     (чтобы не требовалось подтверждение почты)
-- ═══════════════════════════════════════════════

-- профили пользователей
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  start_date date not null default current_date,
  checklists jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- записи дневника
create table journal_entries (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  timestamp timestamptz not null default now(),
  date date not null default current_date,
  food text,
  hunger int,
  satiation int,
  hunger_type text,
  emotions text[] default '{}',
  notes text,
  created_at timestamptz not null default now()
);

create index idx_journal_user on journal_entries(user_id);
create index idx_journal_date on journal_entries(user_id, date);

-- RLS: каждый видит только свои данные
alter table profiles enable row level security;
alter table journal_entries enable row level security;

create policy "own profile: select" on profiles
  for select using (auth.uid() = id);
create policy "own profile: insert" on profiles
  for insert with check (auth.uid() = id);
create policy "own profile: update" on profiles
  for update using (auth.uid() = id);

create policy "own entries: select" on journal_entries
  for select using (auth.uid() = user_id);
create policy "own entries: insert" on journal_entries
  for insert with check (auth.uid() = user_id);
create policy "own entries: update" on journal_entries
  for update using (auth.uid() = user_id);
create policy "own entries: delete" on journal_entries
  for delete using (auth.uid() = user_id);
