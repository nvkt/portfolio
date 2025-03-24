"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function Blog() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creed's Byte Blog</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">Coming soon...</p>
        </motion.div>
      </div>
    </section>
  )
}
