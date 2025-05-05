import { useState } from "react";
import { QuizSectionData, Quiz } from "../models/QuizTypes";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface QuizSelectorProps {
  sections: QuizSectionData[];
  onSelectQuiz: (quiz: Quiz) => void;
}

const QuizSelector = ({ sections, onSelectQuiz }: QuizSelectorProps) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  
  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        QuizVerse
      </h1>
      <p className="text-center text-lg text-muted-foreground mb-8">
        Select a quiz section to begin
      </p>
      
      <Tabs defaultValue={sections[0].id} onValueChange={setActiveSection}>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <TabsList className="inline-flex h-10 w-full justify-start p-1">
            {sections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id} 
                className="relative min-w-[120px] px-4"
              >
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        <div className="mt-6">
          {sections.map((section) => (
            <TabsContent 
              key={section.id} 
              value={section.id} 
              className="mt-0 space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.quizzes.map((quiz) => (
                  <Card 
                    key={quiz.id} 
                    className="hover:shadow-md transition-all option-transition flex flex-col group"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-xl line-clamp-2 flex-1">
                          {quiz.title}
                        </CardTitle>
                        <Badge variant="secondary" className="shrink-0">
                          {quiz.questions.length} {quiz.questions.length === 1 ? 'Q' : 'Qs'}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-3 mt-2">
                        {quiz.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Estimated time: {Math.ceil(quiz.questions.length * 1.5)} mins</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full group-hover:bg-primary/90 transition-colors" 
                        onClick={() => onSelectQuiz(quiz)}
                      >
                        Start Quiz
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default QuizSelector;
