-- Create RSVPs table
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guests INTEGER NOT NULL DEFAULT 1,
  dietary TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for RSVP submissions)
CREATE POLICY "Allow public RSVP submissions" ON rsvps
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to read (for admin view - you can restrict this further)
CREATE POLICY "Allow public read access" ON rsvps
  FOR SELECT
  USING (true);

-- Note: In production, you might want to restrict SELECT to authenticated users only
-- or use a service role key for the admin view instead of allowing public read access
