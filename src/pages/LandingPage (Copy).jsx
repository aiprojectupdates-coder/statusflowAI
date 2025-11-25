import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Rocket,
  Database,
  BarChart3,
  FileText,
  Zap,
  Github,
  MessageSquare,
  Sheet,
  Timer,
  FileCheck,
  Send,
  Loader2
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const heroRef = useRef(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      const duration = 20 + Math.random() * 10;
      const delay = index * 2;
      shape.style.animationDuration = `${duration}s`;
      shape.style.animationDelay = `${delay}s`;
    });
  }, []);

  const scrollToWorkflow = () => {
    document.getElementById('workflow-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">StatusFlow AI</div>
          <div className="flex gap-8 items-center">
            <a href="#workflow" className="text-sm hover:text-cyan-500 transition-colors duration-200">How It Works</a>
            <a href="#research" className="text-sm hover:text-cyan-500 transition-colors duration-200">Research</a>
            <a href="#benefits" className="text-sm hover:text-cyan-500 transition-colors duration-200">Benefits</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Animated Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shape absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="floating-shape absolute top-40 right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
          <div className="floating-shape absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="floating-shape absolute bottom-40 right-1/3 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6 animate-fade-in">
            Humanized project insights
            <br />
            <span className="text-cyan-500">Automated KPIs</span>
<br />
            <span className="text-cyan-500">Zero reporting effort</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light animate-fade-in-delay">
            Stop writing status reports manually. AI reads your project tools and produces executive-ready status summaries + KPI dashboards.
          </p>
          <Button 
            onClick={scrollToWorkflow}
            size="lg"
            className="bg-black hover:bg-cyan-500 text-white px-12 py-6 text-lg transition-all duration-300 hover:scale-105 animate-fade-in-delay-2"
          >
            See It In Action
          </Button>
        </div>
      </section>

      {/* Simple Explainer Section */}
      <section id="workflow" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tight mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              It reads your project data, summarizes progress in natural language, and updates dashboards automatically.
            </p>
          </div>

          {/* 3-Step Workflow */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Database className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-light mb-4 text-gray-300">01</div>
                <h3 className="text-2xl font-light mb-4">Collect Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically pulls data from Slack, GitHub, QASE, Clockify, Google Sheets, and Confluence.
                </p>
                <div className="flex gap-3 mt-6 flex-wrap">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <Github className="w-5 h-5 text-gray-400" />
                  <FileCheck className="w-5 h-5 text-gray-400" />
                  <Timer className="w-5 h-5 text-gray-400" />
                  <Sheet className="w-5 h-5 text-gray-400" />
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 italic mt-4 leading-relaxed">
                  Not limited to these tools and can be integrated with other tools of your choice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-light mb-4 text-gray-300">02</div>
                <h3 className="text-2xl font-light mb-4">AI Generates Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interprets unstructured data and produces natural language executive summaries with next steps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <BarChart3 className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-light mb-4 text-gray-300">03</div>
                <h3 className="text-2xl font-light mb-4">KPIs on Dashboard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Key metrics are stored in Postgres and visualized in real-time Superset dashboards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* N8N Workflow Section */}
      <section id="workflow-section" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light tracking-tight mb-6">Automation Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Watch the complete automation process in action with N8N
            </p>
          </div>
          
          <Card className="border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-black overflow-hidden rounded-lg">
                <Card className="border-gray-200 overflow-hidden">
  <CardContent className="p-0">
    <div className="aspect-video bg-black overflow-hidden rounded-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/8Lom0EY20q4?rel=0&modestbranding=1"
        title="N8N Workflow Demonstration"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
</Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thesis Abstract Section */}
      <section id="research" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light tracking-tight mb-6">Research Objective & Academic Value</h2>
          </div>
          
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-12">
              <h3 className="text-2xl font-light mb-6 text-cyan-500">Thesis Abstract</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This project introduces an AI-driven automation system that eliminates the need for manual project status reporting. By integrating multiple project data sources, including Slack, QASE test results, GitHub issues, Clockify time logs, Google Sheets risk register, and Confluence pages, the system generates a humanized executive-level project status summary. The AI interprets unstructured data, extracts insights, and produces a natural language report suitable for management consumption. Key project KPIs are automatically stored in a database and displayed through Superset dashboards to enable data-driven decision-making. The objective of the thesis is to demonstrate that automation can improve reporting accuracy, reduce reporting time, and increase transparency across cross-functional software projects.
              </p>
              <p className="text-sm text-gray-500 italic mt-6 leading-relaxed border-t border-gray-300 pt-6">
                <strong>Note:</strong> The system is not limited to these specific tools and can be extended to integrate with other project management and collaboration tools of your choice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tight mb-6">Why This Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Transform how your team communicates project status
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-3">Saves Hours Every Week</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No manual report writing. The AI handles data collection, analysis, and summary generation automatically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-3">Real-Time Visibility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Live dashboards provide instant insights into project health, risks, and progress metrics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-3">Removes Bias</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI reports are based purely on data, eliminating subjective interpretation and human error.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors duration-300">
                    <Rocket className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-3">Executive Communication</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Natural language summaries that are perfect for management meetings and stakeholder updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section id="demo-section" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light tracking-tight mb-6">Live KPI Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Superset visualization of project health and performance metrics
            </p>
          </div>
          
          <Card className="border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-12 h-12 text-cyan-500" />
                  </div>
                  <p className="text-gray-500 font-light text-lg">Superset Dashboard Screenshot Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Insert your dashboard visualization here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="floating-shape absolute top-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
          <div className="floating-shape absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-light tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Interested in learning more about AI-driven project automation?
            </p>
          </div>

          <Card className="border-gray-700 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light tracking-tight">StatusFlow AI</div>
            <div className="text-sm text-gray-500 font-light">
              Thesis Project: AI-Driven Project Status Automation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
