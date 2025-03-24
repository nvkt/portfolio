"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-8 items-center md:items-start"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img src="/casual.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 -z-10 blur-sm"></div>
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">A Passionate Developer</h3>
              <p className="text-muted-foreground mb-6">
                I'm a software developer with a passion for creating clean, efficient, and user-friendly applications.
                With over 4 years of education and experience in the field, I have honed my skills in various programming languages
                and development disciplines. These range from low-level systems programming to high-level web development.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in software development began when I was in college, where I discovered my love for solving
                complex problems through code. Since then, I've been continuously learning and improving my skills to
                stay at the forefront of technology. 
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, like AI and machine learning,
                or sharing my knowledge through blog posts.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                      <p className="text-muted-foreground">
                        I write maintainable, scalable, and efficient code following best practices and industry
                        standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
                      <p className="text-muted-foreground">
                        I enjoy tackling complex challenges and finding elegant solutions through creative thinking.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Fast Learner</h4>
                      <p className="text-muted-foreground">
                        I quickly adapt to new technologies and environments, constantly expanding my skill set.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

