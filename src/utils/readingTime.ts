/** An estimate for the prose; code and markup are excluded. */
export function readingTime(body: string): number {
  const prose = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/import\s.+?from\s+["'].+?["'];?/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_`~]/g, "");
  return Math.max(
    1,
    Math.ceil(prose.trim().split(/\s+/).filter(Boolean).length / 220),
  );
}
