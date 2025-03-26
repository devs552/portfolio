import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import profile from "../app/images/1000055113.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Floating Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl mx-auto">
        <div className="backdrop-blur-lg bg-white/70 rounded-full border border-violet-200 shadow-lg px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white">
                AS
              </div>
              <span className="text-[10px] sm:text-[16px] text-violet-900">Abdullah Shahab Portfolio</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-slate-600 hover:text-violet-700 transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="#projects"
              className="text-slate-600 hover:text-violet-700 transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link href="#skills" className="text-slate-600 hover:text-violet-700 transition-colors text-sm font-medium">
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 hover:text-violet-700 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-1">
            {/* <Link href="https://github.com/devs552" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-slate-600 hover:text-violet-700 hover:bg-violet-50"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link> */}
            <Link href="https://www.linkedin.com/in/abdullah-baig-b81564126/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-slate-600 hover:text-violet-700 hover:bg-violet-50"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Button
  className="rounded-full px-4 text-sm bg-violet-600 hover:bg-violet-700 text-white"
  size="sm"
  asChild
>
  <Link href="mailto:abdullah.baig1998@gmail.com">
    Email Me
  </Link>
</Button>


          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Gradient */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-violet-50">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            
              <Badge className="px-4 py-1.5 text-sm font-medium mb-4 bg-violet-100 text-violet-800 hover:bg-violet-200 border-violet-200">
                 MERN STACK DEVELOPER
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight md:leading-tight text-slate-900">
                Creating digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                  experiences
                </span>{" "}
                that matter
              </h1>
              <p className="text-xl text-slate-600 max-w-[700px]">
                I design and build modern web applications with a focus on user experience, performance, and
                accessibility.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 gap-2 group bg-violet-600 hover:bg-violet-700 text-white"
                  asChild
                >
                  <Link href="#projects">
                    View my work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-violet-300 text-violet-700 hover:bg-violet-50"
                  asChild
                >
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronRight className="h-6 w-6 rotate-90 text-violet-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-violet-100 shadow-xl">
                  <Image
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    layout="fill"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 size-64 bg-teal-300/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-4 -left-4 p-2 bg-white rounded-lg shadow-lg border border-violet-100">
                  <Badge variant="secondary" className="px-3 py-1.5 bg-violet-100 text-violet-800 border-violet-200">
                    5+ Projects
                  </Badge>
                </div>
                <div className="absolute -bottom-4 -right-4 p-2 bg-white rounded-lg shadow-lg border border-violet-100">
                  <Badge variant="secondary" className="px-3 py-1.5 bg-teal-100 text-teal-800 border-teal-200">
                    4+ Years Experience
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-violet-100 text-violet-800 border border-violet-200">
                  About me
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                  Passionate about creating meaningful digital experiences
                </h2>
                <p className="text-slate-600 text-lg">
                  I'm a Mern stack developer with a strong foundation in React.js, Node.js, Next.js and modern web technologies. I
                  specialize in building responsive, functional with apis, user-friendly interfaces that provide exceptional user experiences.
                </p>
                <p className="text-slate-600 text-lg">
                  With a background in both design, api, server and development, I bring a unique perspective to every project,
                  focusing on both aesthetics and functionality to deliver high-quality solutions that meet business
                  goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="rounded-full px-6 gap-2 group bg-violet-600 hover:bg-violet-700 text-white"
                    asChild
                  >
                    <Link href="/resume.pdf" target="_blank">
                      Download Resume
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 border-violet-300 text-violet-700 hover:bg-violet-50"
                    asChild
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative bg-gradient-to-b from-violet-50 to-slate-50">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-violet-100 text-violet-800 border border-violet-200">
                My Work
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
              <p className="text-slate-600 text-lg">
                A selection of my recent work. Each project represents a unique challenge and solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="group overflow-hidden border-violet-100 shadow-lg bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/rmc.png"
                    alt="Project 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">Repair My Concrete</CardTitle>
                    <Badge variant="outline" className="px-2 py-1 text-xs border-violet-200 text-violet-700">
                      Web App
                    </Badge>
                  </div>
                  <CardDescription className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-violet-100 text-violet-800">
                      React
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-teal-100 text-teal-800">
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 py-0 text-xs bg-fuchsia-100 text-fuchsia-800"
                    >
                      Tailwind
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 py-0 text-xs bg-fuchsia-100 text-fuchsia-800"
                    >
                     Node.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 py-0 text-xs bg-fuchsia-100 text-fuchsia-800"
                    >
                     MongoDB
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <p className="text-slate-600">
                   A fully functional app for construction company in which services of that company is shows. it is CMS.
                   having two panels Admin and User.
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-violet-200 text-violet-700 hover:bg-violet-50"
                    asChild
                  >
                  
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full gap-1 group/btn bg-violet-600 hover:bg-violet-700 text-white float-right"
                    asChild
                  >
                    <Link href="https://repairmyconcrete.com/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="group overflow-hidden border-teal-100 shadow-lg bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/ma.png"
                    alt="Project 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">Mobile Accessories App</CardTitle>
                    <Badge variant="outline" className="px-2 py-1 text-xs border-teal-200 text-teal-700">
                      Web App
                    </Badge>
                  </div>
                  <CardDescription className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-violet-100 text-violet-800">
                      React
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-teal-100 text-teal-800">
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 py-0 text-xs bg-fuchsia-100 text-fuchsia-800"
                    >
                 Tailwind 
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <p className="text-slate-600">
                   An Ecommerce App for Mobile accessories with cart and checkout feature and also have two panels like User and Admin.
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 flex justify-end">
                  
                  <Button
                    size="sm"
                    className="rounded-full gap-1 group/btn bg-teal-600 hover:bg-teal-700 text-white"
                    asChild
                  >
                    <Link href="https://mobile-accessories-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="group overflow-hidden border-fuchsia-100 shadow-lg bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/ss.png"
                    alt="Project 3"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">Surgical Store </CardTitle>
                    <Badge variant="outline" className="px-2 py-1 text-xs border-fuchsia-200 text-fuchsia-700">
                      Web App
                    </Badge>
                  </div>
                  <CardDescription className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-violet-100 text-violet-800">
                      React
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs bg-teal-100 text-teal-800">
                     Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 py-0 text-xs bg-fuchsia-100 text-fuchsia-800"
                    >
                     Tailwind
                     </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <p className="text-slate-600">
                  An Ecommerce App for Surgical products with cart and checkout feature and also have two panels like User and Admin.
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 flex justify-end">

                  <Button
                    size="sm"
                    className="rounded-full gap-1 group/btn bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                    asChild
                  >
                    <Link href="https://surgical-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

           {/* <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="rounded-full px-8 gap-2 group border-violet-300 text-violet-700 hover:bg-violet-50"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View All Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div> */}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                My Expertise
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Skills & Technologies</h2>
              <p className="text-slate-600 text-lg">
                I've worked with a variety of technologies in the web development ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "HTML5", level: 95, color: "violet" },
                { name: "CSS3", level: 90, color: "violet" },
                { name: "JavaScript", level: 92, color: "violet" },
                { name: "TypeScript", level: 85, color: "violet" },
                { name: "React.js", level: 90, color: "teal" },
                { name: "Next.js", level: 88, color: "teal" },
                { name: "Tailwind CSS", level: 95, color: "teal" },
                { name: "Redux", level: 80, color: "teal" },
                { name: "Node.js", level: 75, color: "fuchsia" },
                { name: "Express", level: 70, color: "fuchsia" },
                { name: "MongoDB", level: 65, color: "fuchsia" },
                { name: "Git", level: 85, color: "fuchsia" },
                { name: "Responsive Design", level: 95, color: "teal" },
                { name: "UI/UX Design", level: 80, color: "violet" },
                { name: "RESTful APIs", level: 85, color: "fuchsia" },
        
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className={`size-16 rounded-full bg-${skill.color}-100 flex items-center justify-center mb-2`}>
                    <div className={`size-12 rounded-full bg-${skill.color}-200 flex items-center justify-center`}>
                      <div className={`size-8 rounded-full bg-${skill.color}-300 flex items-center justify-center`}>
                        <div className={`size-4 rounded-full bg-${skill.color}-600`}></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-slate-900">{skill.name}</h3>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div
                      className={`bg-${skill.color}-600 h-1.5 rounded-full`}
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor:
                          skill.color === "violet" ? "#7c3aed" : skill.color === "teal" ? "#0d9488" : "#c026d3", // fuchsia
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-gradient-to-b from-slate-50 to-violet-50 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200">
                Testimonials
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">What People Say</h2>
              <p className="text-slate-600 text-lg">Feedback from clients and colleagues I've worked with.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-white border-violet-100 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-amber-400"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 italic">
                      "Working with this developer was a fantastic experience. They delivered a high-quality website
                      that exceeded our expectations and was completed ahead of schedule."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="size-12 rounded-full "><img className="rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.thkQqBCNGCEOb6AlLMbGzgHaH3&pid=Api&P=0&h=220"/></div>
                      <div>
                        <h4 className="font-medium text-slate-900">Sarah Johnson</h4>
                        <p className="text-sm text-slate-500">CEO, TechStart</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-white border-teal-100 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-amber-400"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 italic">
                      "An exceptional developer who not only understands the technical aspects but also has a keen eye
                      for design. The e-commerce platform they built for us has significantly increased our conversion
                      rates."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                    <div className="size-12 rounded-full "><img className="rounded-full" src="https://tse4.mm.bing.net/th?id=OIP.QkiaZp5WU-SmzKu0-OL24gHaHa&pid=Api&P=0&h=220"/></div>
                      <div>
                        <h4 className="font-medium text-slate-900">Michael Chen</h4>
                        <p className="text-sm text-slate-500">Marketing Director, ShopEasy</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-white border-fuchsia-100 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-amber-400"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 italic">
                      "I've worked with many developers, but few have the combination of technical skill and
                      communication ability that this developer possesses. They're now our go-to for all web development
                      projects."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                    <div className="size-12 rounded-full "><img className="rounded-full" src="https://hroplaw.com/wp-content/uploads/2022/10/emily.jpg"/></div>
                      <div>
                        <h4 className="font-medium text-slate-900">Emily Rodriguez</h4>
                        <p className="text-sm text-slate-500">Project Manager, WebSolutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-violet-100 text-violet-800 border border-violet-200">
                  Get In Touch
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900">Let's work together</h2>
                <p className="text-slate-600 text-lg">
                  Have a project in mind or want to chat? Feel free to reach out and I'll get back to you as soon as
                  possible.
                </p>

                <div className="grid gap-6 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-violet-100 flex items-center justify-center">
                      <Mail className="size-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Email</h3>
                      <p className="text-slate-600">your-email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Linkedin className="size-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">LinkedIn</h3>
                      <p className="text-slate-600">linkedin.com/in/yourname</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-fuchsia-100 flex items-center justify-center">
                      <Github className="size-5 text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">GitHub</h3>
                      <p className="text-slate-600">github.com/yourname</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-xl rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-violet-100 to-fuchsia-100 p-8">
                  <CardTitle className="text-xl text-slate-900">Send Me a Message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 bg-white">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-slate-900">
                          First name
                        </label>
                        <Input id="first-name" placeholder="John" className="rounded-lg border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-slate-900">
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Doe" className="rounded-lg border-slate-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="rounded-lg border-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-900">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="min-h-[120px] rounded-lg border-slate-200"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="p-8 pt-0 bg-white">
                  <Button className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 text-white">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white">
                AS
              </div>
              <span className="font-bold text-slate-900">Abdullah Shahab</span>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Abdullah Shahab. All rights reserved.</p>
            <div className="flex gap-4">
            
              <Link href="https://www.linkedin.com/in/abdullah-baig-b81564126/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-teal-100 hover:text-teal-700 text-slate-600"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:abdullah.baig1998@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-fuchsia-100 hover:text-fuchsia-700 text-slate-600"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

