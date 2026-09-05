import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function FinalCTA() {
  return (
    <section className="bg-dark text-text-on-dark py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Have a website or workflow that needs improving?
            </h2>
            <p className="text-text-muted-dark text-lg mb-10">
              Tell us what is slowing your business down. We can help determine whether the right starting point is a website, a better lead flow, automation, or a combination of them.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Start a Conversation
            </Button>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
