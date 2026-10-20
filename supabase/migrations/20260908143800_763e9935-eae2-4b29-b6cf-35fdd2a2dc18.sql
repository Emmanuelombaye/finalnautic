CREATE POLICY "Service role only" ON public.wellness_assessment_completions
FOR ALL TO authenticated, anon
USING (false)
WITH CHECK (false);