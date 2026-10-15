import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-xs text-muted-foreground">error: 404</p>
      <h1 className="text-2xl font-medium tracking-tight">Page not found</h1>
      <p className="text-sm text-muted-foreground">
        cd: no such file or directory
      </p>
      <Button asChild variant="link" size="sm">
        <Link to="/">cd ~</Link>
      </Button>
    </div>
  );
}
