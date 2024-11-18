'use client'

import { Card } from "@/components/ui/card"
import { Book, BookOpen, BrainCircuit, Image, Languages, Lightbulb } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'friendly',
      title: 'Дружелюбный',
      subtitle: 'Буду особенно приветлив!',
      icon: <BookOpen className="w-6 h-6" />,
      className: 'col-span-2'
    },
    {
      id: 'shy',
      title: 'Застенчивый',
      subtitle: 'Слегка мягок и нерешителен',
      icon: <Book className="w-6 h-6" />,
      image: '/placeholder.svg?height=80&width=80'
    },
    {
      id: 'joker',
      title: 'Шутник',
      subtitle: 'Пошучу как дедпул',
      icon: <Languages className="w-6 h-6" />,
      image: '/placeholder.svg?height=80&width=80'
    },
    {
      id: 'zoomer',
      title: 'Я зумер:(',
      subtitle: 'Общаюсь на слэнге',
      icon: <Lightbulb className="w-6 h-6" />,
      className: 'col-span-1'
    },
    {
      id: 'sexy',
      title: 'Сексапил',
      subtitle: 'Раздену, если что!',
      icon: <BrainCircuit className="w-6 h-6" />,
      className: 'col-span-1'
    },
    {
      id: 'cocky',
      title: 'Дерзкий',
      subtitle: '',
      icon: <Image className="w-6 h-6" />,
      image: '/placeholder.svg?height=120&width=120',
      className: 'col-span-2 bg-sky-50'
    }
  ]

  const handleFeatureClick = (id: string) => {
    setSelectedFeature(id)
    // Here you would typically trigger the Telegram Web App's native features
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({ action: id }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="text-xl font-semibold mb-6">You can choose any pogonyalo</div>
      
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${feature.className || ''}`}
            onClick={() => handleFeatureClick(feature.id)}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="font-medium mb-1">{feature.title}</div>
                {feature.subtitle && (
                  <div className="text-sm text-muted-foreground">{feature.subtitle}</div>
                )}
              </div>
              {feature.image ? (
                <img
                  src={feature.image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ) : (
                <div className="text-primary">{feature.icon}</div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}