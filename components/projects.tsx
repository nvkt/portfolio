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
      title: "FireEye",
      shortDescription: "Machine learning based real-time fire detection system.",
      description:
        "Machine learning based real-time fire detection system using TensorFlow and Flask. Deployed as a real-time embedded system on a raspberryPi, with a web-based dashboard.",
      image: "/fireEye.jpg",
      tags: ["Python", "TensorFlow", "Flask", "OpenCV", ],
      category: "systems",
      features: [
        "Python TensorFlow integration",
        "Neural network training",
        "Machine learning model deployment",
        "Real-time data processing",
        "Data visualization",
        "Web-based dashboard",
        "User alert system",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        `
        Wildfire Detection AI/ML System
        An AI-powered system for detecting wildfires in images and video streams using deep learning.
        Project Overview: This system uses computer vision and deep learning to detect the presence of wildfires in images and video streams. The project is implemented in three phases:

        Phase 1: Core AI/ML model for image-based fire detection
        Phase 2: Real-time webcam integration
        Phase 3: Raspberry Pi deployment
        `
    },
    {
      id: 2,
      title: "Link Basin",
      shortDescription: "This project is a Chrome/Chromium based browser extension that allows you to save a link, categorize it, and keep it for later.",
      description:
        "LinkPal is a Chrome extension that allows users to save links, categorize them, and access them later. This project aims to provide a simple and efficient way to manage your favorite links directly from your browser.",
      image: "/linkbasin.png",
      tags: ["HTML", "CSS", "JavaScript", "Chrome Extensions", ],
      category: "web",
      features: [
        "Save links from any webpage",
        "Categorize saved links for easy access",
        "View and manage saved links through a user-friendly popup interface",
        "Sync to and from a GitHub repo (PLANNED)",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        `LinkBasin: Chrome Extension for Link Management

A browser extension that helps you organize and save important links for later use.

Project Overview:
LinkBasin is a Chrome/Chromium-based browser extension designed to solve the common problem of losing track of useful links. Unlike traditional bookmarks, LinkBasin offers improved organization with categories, tags, and a clean interface accessible right from your browser toolbar.

Key Implementation Details:

• Built using vanilla JavaScript, HTML, and CSS for browser compatibility

• Uses Chrome Extension API for seamless browser integration

• Implements local storage for saving links directly in the browser

• Features a responsive popup interface designed for quick access

• Planned GitHub synchronization feature will allow backing up and sharing collections

Development Process:
The extension was developed with a focus on simplicity and user experience. I started with the core functionality of saving and retrieving links, then added categorization capabilities and a polished UI. The project taught me about browser extension architecture, Chrome's security model, and efficient data storage practices.

This project addresses the real need for better link management beyond traditional bookmarks, especially for researchers, developers, and anyone who regularly saves links for future reference.`,
    },
  ]

  const getCategoryIcon = (category: string) => {
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
            <ScrollArea className="max-h-[400px] min-h-[300px] rounded-md">
              <div className="p-1">
                {selectedProject.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
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

