/*
  # Fix form submissions RLS policy

  1. Changes
    - Drop existing restrictive policies
    - Add policy to allow anonymous users to insert form submissions
    - Keep service role read access for admin purposes

  2. Security
    - Allow anonymous (public) users to submit forms via INSERT
    - Restrict SELECT access to service role only
*/

DROP POLICY IF EXISTS "Allow service role to insert submissions" ON form_submissions;
DROP POLICY IF EXISTS "Allow service role to read submissions" ON form_submissions;

CREATE POLICY "Allow anyone to insert submissions"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow service role to read submissions"
  ON form_submissions
  FOR SELECT
  TO service_role
  USING (true);