"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, Code, Layers, Server, Database } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "A full-featured e-commerce platform with product management.",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Qt", "SQLite", "CMake"],
      category: "desktop",
      features: [
        "Inventory management system",
        "Real-time stock tracking",
        "Secure payment processing",
        "Order management dashboard",
        "Customer analytics",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This e-commerce platform provides businesses with a complete solution for selling products online. Built with C++ and Qt for high performance and cross-platform compatibility. Features include a responsive design, product catalog with filtering and search capabilities, shopping cart functionality, secure checkout integration, user authentication, and an admin dashboard for managing products, orders, and customers.",
    },
    {
      id: 2,
      title: "Task Management System",
      shortDescription: "A collaborative task management application with real-time updates.",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
      category: "web",
      features: [
        "Real-time collaboration",
        "Task dependencies",
        "Resource allocation",
        "Progress tracking",
        "Team management",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This task management system helps teams organize and track their work efficiently. Built with Java Spring Boot for the backend and React for the frontend, it provides robust task management capabilities. Features include task creation and assignment, due dates and reminders, progress tracking, file attachments, comments and discussions, team workspaces, and real-time updates.",
    },
    {
      id: 3,
      title: "System Resource Monitor",
      shortDescription: "A comprehensive system monitoring tool with real-time analytics.",
      description: "A comprehensive system monitoring tool with real-time analytics and performance tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Python", "Qt", "Linux"],
      category: "desktop",
      features: [
        "CPU/Memory monitoring",
        "Process management",
        "Network analytics",
        "Disk usage tracking",
        "Performance alerts",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This system resource monitor provides real-time insights into system performance. Built primarily in C++ with Python for data analysis, it offers comprehensive monitoring capabilities. The application tracks CPU usage, memory consumption, network traffic, and disk operations, providing detailed analytics and alerts for system administrators.",
    },
    {
      id: 4,
      title: "Compiler Design Project",
      shortDescription: "A custom programming language compiler with optimization features.",
      description: "A custom programming language compiler with advanced optimization features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C", "LLVM", "Assembly", "Python"],
      category: "systems",
      features: ["Lexical analysis", "Syntax parsing", "Code optimization", "Error handling", "Assembly generation"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This compiler project implements a custom programming language with modern features and optimizations. Built using C and LLVM, it includes comprehensive error handling and code optimization capabilities. The compiler performs lexical analysis, syntax parsing, semantic analysis, and generates optimized assembly code.",
    },
    {
      id: 5,
      title: "Distributed Database System",
      shortDescription: "A distributed database system with high availability.",
      description: "A distributed database system with high availability and fault tolerance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Rust", "gRPC", "Redis"],
      category: "systems",
      features: ["Data replication", "Sharding", "Fault tolerance", "Load balancing", "Transaction management"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This distributed database system provides high availability and fault tolerance for large-scale applications. Built with C++ and Rust for performance, it implements advanced features such as data replication, sharding, and automatic failover. The system includes comprehensive monitoring and management tools.",
    },
    {
      id: 6,
      title: "Neural Network Framework",
      shortDescription: "A deep learning framework optimized for performance.",
      description: "A deep learning framework with CUDA acceleration and optimization features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "CUDA", "Python", "CMake"],
      category: "systems",
      features: [
        "CUDA acceleration",
        "Automatic differentiation",
        "Model optimization",
        "Training pipelines",
        "Performance profiling",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This neural network framework provides high-performance deep learning capabilities. Built primarily in C++ with CUDA acceleration, it offers comprehensive tools for building and training neural networks. Features include automatic differentiation, model optimization, and detailed performance profiling.",
    },
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "web":
        return <Layers className="h-4 w-4" />
      case "desktop":
        return <Code className="h-4 w-4" />
      case "systems":
        return <Server className="h-4 w-4" />
      case "database":
        return <Database className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="mb-2">
                      {project.category}
                    </Badge>
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-2" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        <span className="sr-only md:not-sr-only md:inline-block">Code</span>
                      </a>
                    </Button>
                    <Button size="sm" className="h-8 px-2" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span className="sr-only md:not-sr-only md:inline-block">Demo</span>
                      </a>
                    </Button>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8" onClick={() => setSelectedProject(project)}>
                    Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline">{selectedProject.category}</Badge>
                {getCategoryIcon(selectedProject.category)}
              </div>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden mt-2">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <ScrollArea className="max-h-[200px] rounded-md">
              <div className="p-1">
                <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                <Separator className="my-4" />
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button asChild>
                <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

