import React from 'react';
import { PenLine, RefreshCw, Trash2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-100">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              Icon: PenLine,
              title: 'Create',
              description: 'Easily create new blog posts with our user-friendly interface.',
            },
            {
              Icon: RefreshCw,
              title: 'Update',
              description: 'Keep your content fresh by updating your posts anytime.',
            },
            {
              Icon: Trash2,
              title: 'Delete',
              description: 'Remove outdated or unnecessary posts with a single click.',
            },
          ].map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-700 text-gray-100 border border-gray-600 p-6 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon className="h-6 w-6 text-gray-300" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};