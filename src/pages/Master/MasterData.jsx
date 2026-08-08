import React from 'react';
import { BookOpen, Tag, Heart, Users, Truck, Globe, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const ITEMS = [
  {
    id: 'subjects',
    title: 'Subjects',
    icon: BookOpen,
    description: 'Manage subjects',
    count: 24,
    countLabel: 'Subjects',
    accent: 'from-violet-100 to-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    id: 'medium',
    title: 'Medium',
    icon: Tag,
    description: 'Manage medium',
    count: 3,
    countLabel: 'Mediums',
    accent: 'from-sky-100 to-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    id: 'language',
    title: 'Language',
    icon: Heart,
    description: 'Manage languages',
    count: 5,
    countLabel: 'Languages',
    accent: 'from-rose-100 to-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Users,
    description: 'Manage skills',
    count: 12,
    countLabel: 'Skills',
    accent: 'from-emerald-100 to-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: BookOpen,
    description: 'Manage certificates',
    count: 8,
    countLabel: 'Certificates',
    accent: 'from-indigo-100 to-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 'designation',
    title: 'Designation',
    icon: Tag,
    description: 'Manage designations',
    count: 10,
    countLabel: 'Designations',
    accent: 'from-amber-100 to-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: 'qualification',
    title: 'Qualification',
    icon: BookOpen,
    description: 'Manage qualifications',
    count: 15,
    countLabel: 'Qualifications',
    accent: 'from-emerald-100 to-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'campus',
    title: 'Campus',
    icon: Home,
    description: 'Manage campus',
    count: 2,
    countLabel: 'Campus',
    accent: 'from-purple-100 to-purple-50',
    iconColor: 'text-purple-600',
  },
];

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function MasterData() {
  return (
    <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
      <motion.div variants={cardVariant} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h1
            className="text-3xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Master Data
          </motion.h1>
          <motion.p
            className="text-gray-600 mt-1"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            Manage academic and system master data.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <Input placeholder="Search master data..." className="min-w-[260px]" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
            <Button variant="primary" size="md">+ Add New Master Data</Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              <Card className="h-full p-6 rounded-[24px] border border-transparent hover:border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-3xl flex items-center justify-center bg-gradient-to-br ${item.accent}`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-colors duration-200 hover:bg-gray-50">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-6">
                  <CardTitle className="text-xl font-semibold text-gray-900">{item.title}</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                </div>

                <CardContent>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span className="font-semibold text-primary-600">{item.count}</span>
                      <span>{item.countLabel}</span>
                    </div>
                    <button className="w-full justify-center inline-flex items-center py-2 border border-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                      View All
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
