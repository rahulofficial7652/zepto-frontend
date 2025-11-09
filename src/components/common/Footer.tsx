import Link from "next/link";
import { Package2, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold">ZeptoClone</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ZeptoClone, Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
