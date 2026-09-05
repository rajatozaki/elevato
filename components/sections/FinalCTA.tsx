import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function FinalCTA() {
  return (
    <section className="py-28 lg:py-36 relative border-t border-border-subtle bg-surface/60">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-secondary mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Direct Discovery · Transparent Scope</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-text-primary leading-tight">
              Have a website or workflow that needs improving?
            </h2>
            <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Tell us what is slowing your business down. We can help determine whether the right starting point is a website, a better lead flow, automation, or a combination of them.
            </p>
            <Button variant="primary" size="lg" href="/contact" className="w-full sm:w-56 text-center justify-center">
              Start a Conversation
            </Button>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
