
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
      
      <Tabs
        defaultValue={sections[0].id}
        onValueChange={setActiveSection}
        className="w-full"
      >
        <TabsList className="grid w-full mb-8" style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}>
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="py-3">
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-0 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.quizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-all option-transition">
                  <CardHeader>
                    <CardTitle className="text-xl">{quiz.title}</CardTitle>
                    <CardDescription>{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {quiz.questions.length} questions
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => onSelectQuiz(quiz)}>
                      Start Quiz
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default QuizSelector;
