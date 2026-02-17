import type { JsonLd } from "@/lib/structured-data";

interface JsonLdProps {
  /** Single schema object or array of schema objects */
  data: JsonLd | JsonLd[];
}

/**
 * Renders Schema.org structured data as JSON-LD script tag(s).
 * Pass one object or an array of objects to output multiple schemas.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
