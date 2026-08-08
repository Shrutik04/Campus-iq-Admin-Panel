import React from 'react';
import { ShieldCheck, Building2, Settings2, Zap, Layers, Grid, SlidersHorizontal, Star, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const SUMMARY = [
  { id: 'settings', label: 'Total Settings', value: '82', detail: 'Active configuration items', accent: 'from-sky-100 to-sky-50' },
  { id: 'roles', label: 'User Roles', value: '14', detail: 'Role definitions', accent: 'from-violet-100 to-violet-50' },
  { id: 'locations', label: 'Locations', value: '9', detail: 'Campus areas', accent: 'from-emerald-100 to-emerald-50' },
  { id: 'alerts', label: 'Notifications', value: '27', detail: 'Active alert rules', accent: 'from-amber-100 to-amber-50' },
];

const ITEMS = [
  {
    id: 'system-settings',
    title: 'System Settings',
    icon: Settings2,
    description: 'Site preferences, access control, and default values.',
    accent: 'from-sky-100 to-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    id: 'user-roles',
    title: 'User Roles',
    icon: ShieldCheck,
    description: 'Role-based access and permission groups.',
    accent: 'from-violet-100 to-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    id: 'locations',
    title: 'Locations',
    icon: Building2,
    description: 'Campuses, buildings, and zones.',
    accent: 'from-emerald-100 to-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'custom-fields',
    title: 'Custom Fields',
    icon: SlidersHorizontal,
    description: 'Custom field definitions for forms.',
    accent: 'from-orange-100 to-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 'notification',
    title: 'Notification Settings',
    icon: Zap,
    description: 'Notification channels and templates.',
    accent: 'from-rose-100 to-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: BarChart2,
    description: 'Dashboard and report configuration.',
    accent: 'from-cyan-100 to-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    id: 'layouts',
    title: 'Layouts',
    icon: Grid,
    description: 'Design page sections and layouts.',
    accent: 'from-indigo-100 to-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: Star,
    description: 'Manage platform branding and logos.',
    accent: 'from-purple-100 to-purple-50',
    iconColor: 'text-purple-600',
  },
];

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const statsVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Master() {
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
            Master
          </motion.h1>
          <motion.p
            className="text-gray-600 mt-1"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            Manage all master settings and configurations.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <Input placeholder="Search master..." className="min-w-[260px]" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
            <Button variant="primary" size="md">+ Add New Master</Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {SUMMARY.map((item) => (
          <motion.div key={item.id} variants={statsVariant} initial="hidden" animate="visible" whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.2 }}>
            <Card className="h-full p-6 rounded-[24px] border border-transparent hover:border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-gray-900">{item.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-3xl bg-gradient-to-br ${item.accent} flex items-center justify-center`}>
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <p className="text-sm text-gray-500">{item.detail}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" animate="visible" variants={container} className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.id} variants={cardVariant} whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.2 }} className="cursor-pointer">
              <Card className="h-full p-6 rounded-[24px] border border-transparent hover:border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-3xl flex items-center justify-center bg-gradient-to-br ${item.accent}`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">{item.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
