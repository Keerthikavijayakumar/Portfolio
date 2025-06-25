
import { Trophy, Medal, Award, Target, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Sports = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-purple-400 mb-6">SPORTS ERA</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Beyond academics and technology, sports have shaped my character, 
          teaching me discipline, teamwork, and the pursuit of excellence.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Athletic Achievements */}
        <Card className="bg-gradient-to-br from-white/95 to-gray-100/95 border-purple-500/40 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Trophy className="text-purple-600 mx-auto mb-3" size={48} />
              <h3 className="text-xl font-bold text-gray-900">Athletics(School)</h3>
            </div>
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-2">
                <Medal size={16} className="text-yellow-600" />
                <span>Zone shotput winner(under-14,17) </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-purple-600" />
                <span>Junior Throwball runner(Teamlead)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-green-600" />
                <span>2018 Inter school Ball-Badminton</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Sports */}
        <Card className="bg-gradient-to-br from-white/95 to-gray-100/95 border-purple-500/40 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Award className="text-purple-600 mx-auto mb-3" size={48} />
              <h3 className="text-xl font-bold text-gray-900">Throwball</h3>
            </div>
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-2">
                <Medal size={16} className="text-gray-600" />
                <span>School Team Captain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy size={16} className="text-orange-600" />
                <span>(2024)Intracollege Tournament Runner-up</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-green-600" />
                <span>(2023)Intracollege Tournament Winner</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Excellence */}
        <Card className="bg-gradient-to-br from-white/95 to-gray-100/95 border-purple-500/40 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <Target className="text-purple-600 mx-auto mb-3" size={48} />
              <h3 className="text-xl font-bold text-gray-900">Handball</h3>
            </div>
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-2">
                <Medal size={16} className="text-yellow-600" />
                <span>GoalKeeper</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-purple-600" />
                <span>State Level Participant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-green-600" />
                <span>Represented Anna University</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sports Philosophy */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-white/95 to-gray-100/95 border-purple-500/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sports Philosophy & Values</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3">Leadership & Teamwork</h4>
                <p className="text-black">
                  As volleyball team captain, I learned to motivate diverse personalities, 
                  coordinate strategies under pressure, and lead by example both on and off the court.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3">Discipline & Perseverance</h4>
                <p className="text-black">
                  Track and field taught me the value of consistent training, goal-setting, 
                  and pushing through barriers to achieve personal bests.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3">Strategic Thinking</h4>
                <p className="text-black">
                  Badminton enhanced my ability to think several moves ahead, adapt quickly 
                  to changing situations, and maintain focus under competitive pressure.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3">Work-Life Balance</h4>
                <p className="text-black">
                  Sports provide the perfect counterbalance to academic pursuits, 
                  keeping me physically fit and mentally sharp for coding challenges.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-purple-300 italic">
          "In sports, as in programming, success comes from practice, persistence, and the courage to take on new challenges."
        </p>
        <p className="text-purple-400 font-semibold mt-4">- Athletic Journey Continues</p>
      </div>
    </div>
  );
};

export default Sports;
