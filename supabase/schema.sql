-- BausubstanzManager Website: Roadmap voting + feature suggestions

create table if not exists public.feature_votes (
  feature_id text primary key,
  votes integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.feature_suggestions (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  language text not null default 'de',
  created_at timestamptz not null default now()
);

alter table public.feature_votes enable row level security;
alter table public.feature_suggestions enable row level security;

-- Public read access for displaying vote counts
create policy if not exists "votes_select_public"
on public.feature_votes
for select
to anon
using (true);

-- Public upsert/insert for voting from website
create policy if not exists "votes_insert_public"
on public.feature_votes
for insert
to anon
with check (true);

create policy if not exists "votes_update_public"
on public.feature_votes
for update
to anon
using (true)
with check (true);

-- Public insert for suggestions from website form
create policy if not exists "suggestions_insert_public"
on public.feature_suggestions
for insert
to anon
with check (true);

-- Optional: block select for suggestions to anon (privacy)
create policy if not exists "suggestions_no_select_anon"
on public.feature_suggestions
for select
to anon
using (false);

-- Seed roadmap vote rows (optional)
insert into public.feature_votes (feature_id, votes) values
  ('ocr', 45),
  ('3d', 38),
  ('cloud', 52),
  ('web', 35),
  ('ai-reports', 28),
  ('mobile-offline-sync', 22)
on conflict (feature_id) do nothing;
