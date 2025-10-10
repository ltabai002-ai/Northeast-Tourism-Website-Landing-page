/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Customer name
      - `email` (text) - Customer email address
      - `phone` (text) - Customer phone number
      - `business_name` (text) - Business name
      - `location` (text) - Business location
      - `created_at` (timestamptz) - Timestamp of submission
      - `whatsapp_sent` (boolean) - Track if WhatsApp notification was sent

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for service role to insert submissions
    - Add policy for authenticated admins to read submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_name text NOT NULL,
  location text NOT NULL,
  whatsapp_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role to insert submissions"
  ON form_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow service role to read submissions"
  ON form_submissions
  FOR SELECT
  TO service_role
  USING (true);