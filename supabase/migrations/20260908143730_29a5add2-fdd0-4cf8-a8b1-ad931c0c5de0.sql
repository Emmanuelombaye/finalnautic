CREATE TABLE public.wellness_assessment_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  care_area text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  user_agent text,
  referrer text
);

GRANT ALL ON public.wellness_assessment_completions TO service_role;

ALTER TABLE public.wellness_assessment_completions ENABLE ROW LEVEL SECURITY;