import React, { useState, useRef, useEffect } from 'react';
import { Bot, Twitter, Hash, Calendar, Users, Target, BarChart3, Globe, Activity, Award, Send, X, Instagram, Youtube, Facebook, TrendingUp, Eye, Clock, Zap, ChevronDown, LineChart, Sparkles, Hashtag, Brain, PieChart } from 'lucide-react';

function App() {
  // ... (keep existing state and functions)

  const features = [
    {
      title: "Smart Content Scheduling",
      icon: Calendar,
      description: "AI-powered scheduling that predicts the best times to post",
      metrics: [
        { label: "Engagement Increase", value: "47%" },
        { label: "Best Time", value: "3 PM" },
        { label: "Optimal Days", value: "Tue-Thu" }
      ]
    },
    {
      title: "Competitor Insights",
      icon: Eye,
      description: "Track and analyze competitor performance across platforms",
      metrics: [
        { label: "Competitors Tracked", value: "15" },
        { label: "Growth Rate", value: "+23%" },
        { label: "Content Gap", value: "12%" }
      ]
    },
    {
      title: "Hashtag Analytics",
      icon: Hash,
      description: "Dynamic hashtag performance tracking and recommendations",
      metrics: [
        { label: "Top Hashtags", value: "25" },
        { label: "Reach", value: "45K" },
        { label: "Trending", value: "8" }
      ]
    }
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#0A0A0B] text-white">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center p-8">
        {/* Keep existing hero content */}
        {/* ... */}

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[#1D9BF0]" />
        </button>
      </div>

      {/* Features Section */}
      <div className="min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Powerful Features for Modern Social Media Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#1B1B1D] p-6 rounded-2xl border border-gray-800 hover:border-[#1D9BF0]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#1D9BF0]/10 group-hover:bg-[#1D9BF0]/20 transition-all">
                    <feature.icon className="w-6 h-6 text-[#1D9BF0]" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-[#1D9BF0]">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Content Enhancement */}
          <div className="mt-20 bg-[#1B1B1D] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold">AI Content Enhancement</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Smart Suggestions</h4>
                <div className="space-y-2">
                  {['Optimize hashtags', 'Improve readability', 'Enhance engagement', 'Perfect timing'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-400">
                      <Sparkles className="w-4 h-4 text-[#1D9BF0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#2B2B2D] p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Content Score</span>
                  <span className="text-lg font-bold text-[#1D9BF0]">92/100</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[92%] h-full bg-[#1D9BF0] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Dashboard Preview */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Comprehensive Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Posts Analyzed', value: '15.2K', icon: BarChart3 },
                { label: 'Audience Growth', value: '+27%', icon: TrendingUp },
                { label: 'Engagement Rate', value: '5.8%', icon: Activity },
                { label: 'ROI Tracking', value: '3.2x', icon: PieChart }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#1B1B1D] p-6 rounded-xl border border-gray-800">
                  <stat.icon className="w-6 h-6 text-[#1D9BF0] mb-2 mx-auto" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keep existing chat popup */}
      {/* ... */}
    </div>
  );
}

export default App;