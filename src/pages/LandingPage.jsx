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
  Loader2,
  Server,
  Cpu,
  Network,
  LayoutDashboard
} from 'lucide-react';




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
    document.getElementById('detailed-workflow')?.scrollIntoView({ behavior: 'smooth' });
  };

  
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">StatusFlow AI</div>
          <div className="flex gap-8 items-center">
            <a href="#detailed-workflow" className="text-sm hover:text-cyan-500 transition-colors duration-200">How It Works</a>
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
            <span className="text-cyan-500">Automated Project Updates & KPIs.</span>
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

      {/* High Level Overview Section */}
      <section id="overview" className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tight mb-6">The Concept</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We bridge the gap between scattered data and actionable executive intelligence.
            </p>
          </div>

          {/* 3-Step Workflow */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Database className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-light mb-4">1. Aggregation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically pulls data from communication channels, task management tools, and risk registers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-light mb-4">2. Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI interprets unstructured data to generate natural-language executive summaries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <BarChart3 className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-light mb-4">3. Visualization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Key metrics and summaries are visualized in real-time Superset dashboards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Technical Workflow Section (New Replacement) */}
      <section id="detailed-workflow" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              A transparent look at the local automation architecture powering StatusFlow AI.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Step 1: N8N Data Extraction - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-light text-gray-200">01</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                <h3 className="text-3xl font-light tracking-tight">Multi-Source Data Extraction</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The workflow begins with <span className="font-medium text-cyan-600">N8N hosted on a local machine</span>. When triggered, it orchestrates the retrieval of data from a diverse ecosystem of tools.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Communication:</strong> Slack, Microsoft Teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Task Management:</strong> GitHub, Jira</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sheet className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Risk Registers:</strong> Excel, Google Sheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Documentation:</strong> Confluence (Meeting Minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Time-Tracking:</strong> Clockify</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-50"></div>
                   <div className="relative z-10 text-center">
                      <Network className="w-24 h-24 text-cyan-500 mx-auto mb-4 opacity-80" />
                      <span className="text-gray-400 font-light">N8N Integration Workflow Visualization</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Step 2: AI Processing - Text Right, Image Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-light text-gray-200">02</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                <h3 className="text-3xl font-light tracking-tight">AI Summarization & Storage</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once raw data is collected, the AI agent takes over. This can be any Cloud-based LLM (like GPT-4 or Claude) or a <span className="font-medium text-cyan-600">Locally Hosted LLM</span> for maximum privacy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The AI processes the unstructured logs and commits, synthesizing them into a coherent <strong>Executive Summary</strong>. This summary is then formatted and pushed directly to a locally hosted <span className="font-medium text-cyan-600">Postgres Database</span>, ready for retrieval.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-bl from-gray-50 to-transparent opacity-50"></div>
                   <div className="relative z-10 text-center">
                      <Cpu className="w-24 h-24 text-gray-700 mx-auto mb-4 opacity-80" />
                      <span className="text-gray-400 font-light">LLM Processing & Database Injection</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Step 3: KPI Extraction - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-light text-gray-200">03</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                <h3 className="text-3xl font-light tracking-tight">Parallel KPI Calculation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Running parallel to the text summarization is a dedicated N8N sub-workflow focused on quantitative data.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  It parses specific data points—such as tickets closed, budget burned, hours logged, and risk scores—to generate measured <strong>Key Performance Indicators (KPIs)</strong>. These structured metrics are systematically pushed to the same Postgres database, ensuring both qualitative and quantitative data live side-by-side.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-50"></div>
                   <div className="relative z-10 text-center">
                      <Server className="w-24 h-24 text-cyan-500 mx-auto mb-4 opacity-80" />
                      <span className="text-gray-400 font-light">Parallel Data Pipeline Architecture</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Step 4: Superset Dashboard - Text Right, Image Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-light text-gray-200">04</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                <h3 className="text-3xl font-light tracking-tight">Unified Dashboard Visualization</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The final piece of the puzzle is the <span className="font-medium text-cyan-600">Apache Superset</span> tool hosted locally.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Superset connects to the Postgres DB to receive real-time updates. It automatically refreshes the dashboard, combining the AI-generated Executive Summary with the hard KPI metrics. This provides stakeholders with a complete, instant view of the project's status without a single manual report being written.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-bl from-gray-50 to-transparent opacity-50"></div>
                   <div className="relative z-10 text-center">
                      <LayoutDashboard className="w-24 h-24 text-gray-700 mx-auto mb-4 opacity-80" />
                      <span className="text-gray-400 font-light">Superset Dashboard Visualization</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
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
                This project introduces an AI-driven automation system that eliminates the need for manual project status reporting. By integrating multiple project data sources, the system generates a humanized executive-level project status summary suitable for management consumption. For demonstration purposes, the implementation uses Slack, GitHub, QASE, Clockify, Google Sheets, and Confluence as example data sources. The automation architecture, however, is fully extensible and can be scaled to other comparable tools such as alternative communication platforms, task management systems, risk registers, documentation repositories, or time-tracking solutions to achieve the same automated reporting outcomes. Key project KPIs are automatically stored in a database and displayed through Superset dashboards to enable data-driven decision-making. The objective of the thesis is to demonstrate how automation can support Project Managers who struggle to gather updates from multiple teams and tools, and who often face challenges translating technical information into clear, human-understandable updates for executive management.
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
