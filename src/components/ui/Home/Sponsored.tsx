"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";

const images = [
  "/home/sponsors/sponsor1.png",
  "/home/sponsors/sponsor2.png",
  "/home/sponsors/sponsor3.png",
  "/home/sponsors/sponsor4.png",
  "/home/sponsors/sponsor5.png",
  "/home/sponsors/sponsor6.png",
  "/home/sponsors/sponsor8.png",
  "/home/sponsors/sponsor9.png",
  "/home/sponsors/sponsor10.png",
  "/home/sponsors/sponsor11.png",
  "/home/sponsors/sponsor12.png",
];

export default function Sponsored() {
  const baseX = useMotionValue(0);
  // Track scroll velocity
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  console.log(velocityFactor);
  const direction = useRef(1);
  const baseSpeed = 100; // autoplay base speed (px/sec)

  // Infinite loop effect
  useAnimationFrame((t, delta) => {
    let moveBy = direction.current * baseSpeed * (delta / 1000);

    // reverse direction when scrolling up/down
    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;

    moveBy += direction.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() - moveBy);
  });

  return (
    <section className="overflow-hidden w-full py-10">
      <motion.div className="flex gap-12" style={{ x: baseX }}>
        {/* Duplicate once for seamless looping */}
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt={`sponsor-${i}`}
              width={200}
              height={80}
              className="w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
