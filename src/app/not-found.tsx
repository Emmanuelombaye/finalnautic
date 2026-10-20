import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl">Not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page has moved or never existed. Let&apos;s return you home.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
