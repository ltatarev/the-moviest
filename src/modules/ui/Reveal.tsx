import cn from 'classnames';
import {
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';

type RevealProps = {
  children: ReactNode;
  /** Milliseconds to stagger this element behind its siblings. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades + lifts its children in the first time they scroll into view.
 * The animation itself lives in globals.css so it can be disabled wholesale
 * under prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    // No observer (old browsers, jsdom): show the content immediately.
    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.visible = 'true';

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      data-visible={visible}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
