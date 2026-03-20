import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import * as Dialog from '@radix-ui/react-dialog';

export const Resources = () => {
  const articles = [
    {
      id: 'article1',
      title: "Educational Articles on Digital Wellbeing",
      description: "Discover research-backed strategies and insights on how screen time affects the brain.",
      image: "https://images.unsplash.com/photo-1771254239925-e47dd8272add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwYm9vayUyMGluZG9vcnN8ZW58MXx8fHwxNzczOTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fullContent: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>The Dopamine Loop and Our Brains</strong><br/>
            Social media platforms are meticulously designed to capture and hold our attention. Every notification, like, and comment triggers a small release of dopamine in the brain—a neurotransmitter associated with pleasure and reward. Over time, our brains build a tolerance, requiring more time on these platforms to achieve the same level of satisfaction, creating a cycle similar to behavioral addiction.
          </p>
          <p>
            <strong>Impact on Attention Span</strong><br/>
            Research has shown that constant switching between short-form content (like 15-second videos or endless scrolling feeds) can significantly diminish our capacity for deep, sustained focus. This phenomenon, often referred to as "continuous partial attention," makes it increasingly difficult to read long-form texts, engage in complex problem-solving, or even be fully present in real-life conversations.
          </p>
          <p>
            <strong>The Road to Digital Wellbeing</strong><br/>
            Understanding the psychological mechanisms at play is the first step toward regaining control. By recognizing the triggers that lead to mindless scrolling, individuals can implement intentional barriers—such as grayscale mode or disabling non-essential notifications—to break the dopamine loop and restore their cognitive focus.
          </p>
        </div>
      )
    },
    {
      id: 'article2',
      title: "Guidance on Managing Screen Time",
      description: "Practical guides, apps, and tools to help you limit daily digital consumption.",
      image: "https://images.unsplash.com/photo-1483634831823-4fb19cf47c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwaGlraW5nJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzczOTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fullContent: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>Practical Strategies for a Healthier Balance</strong><br/>
            Managing screen time doesn't require throwing your smartphone away; it's about shifting from passive consumption to intentional use. Start by auditing your current screen time using your device's built-in digital wellbeing tools (like iOS Screen Time or Android Digital Wellbeing) to identify which apps consume the majority of your day.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>The 20-20-20 Rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds to reduce digital eye strain.</li>
            <li><strong>App Timers:</strong> Set a strict daily limit for your most problematic apps. Once the timer runs out, respect the lock.</li>
            <li><strong>Tech-Free Zones:</strong> Designate areas in your home, such as the dining room or bedroom, where devices are strictly prohibited.</li>
            <li><strong>Batch Processing:</strong> Instead of checking emails and messages constantly, allocate three specific times a day to respond to them.</li>
          </ul>
          <p>
            By implementing just one or two of these strategies, you can easily reclaim hours of your day previously lost to the algorithmic scroll, allowing you to invest that time into hobbies, rest, or meaningful relationships.
          </p>
        </div>
      )
    },
    {
      id: 'article3',
      title: "Seeking Professional Help",
      description: "When digital habits become an addiction, find counselors and therapists in your area.",
      image: "https://images.unsplash.com/photo-1758273240631-59d44c8f5b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzaXR0aW5nJTIwdGFsa2luZyUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzczOTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fullContent: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>Recognizing When It's More Than Just a Habit</strong><br/>
            There is a distinct difference between spending a lot of time online and suffering from Internet or Social Media Addiction. Warning signs that you may need professional intervention include experiencing severe anxiety or irritability when separated from your phone, neglecting personal hygiene or real-world responsibilities, using screens to escape emotional distress, and unsuccessfully attempting to cut back multiple times.
          </p>
          <p>
            <strong>Therapeutic Approaches</strong><br/>
            Mental health professionals often treat severe digital dependency using Cognitive Behavioral Therapy (CBT). CBT helps individuals identify the underlying emotional triggers—such as loneliness, depression, or social anxiety—that drive compulsive internet use. Therapists work with clients to develop healthier coping mechanisms and reframe negative thought patterns.
          </p>
          <p>
            <strong>Where to Find Support</strong><br/>
            If you or a loved one is struggling, consider reaching out to a licensed psychologist or counselor who specializes in behavioral addictions. Many universities offer counseling services for students, and there are numerous online directories (like Psychology Today) where you can filter therapists by their specialties. Remember, asking for help is a sign of strength, not weakness.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resources & Support</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">Tools, reading materials, and guidance to help you find balance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Dialog.Root key={article.id}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{article.description}</p>
                  
                  <Dialog.Trigger asChild>
                    <button className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors self-start cursor-pointer">
                      Read More <ArrowRight size={16} />
                    </button>
                  </Dialog.Trigger>
                </div>
              </div>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 md:p-8 shadow-xl sm:rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] max-h-[85vh] overflow-y-auto">
                  
                  <div className="mb-6">
                    <Dialog.Title className="text-2xl font-bold text-slate-900 pr-8">
                      {article.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-slate-500 mt-2">
                      {article.description}
                    </Dialog.Description>
                  </div>

                  <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-base">
                    {article.fullContent}
                  </div>

                  <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors focus:outline-none">
                    <X size={20} />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
};
