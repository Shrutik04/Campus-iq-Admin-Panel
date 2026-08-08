import React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
};

export const DataTable = ({ columns = [], data = [], className, noDataMessage = 'No records found.' }) => {
  return (
    <div className={clsx('overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm', className)}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-gray-500">
                {noDataMessage}
              </td>
            </tr>
          ) : (
            <AnimatePresence>
              {data.map((row, rowIndex) => (
                <motion.tr
                  key={row.id || rowIndex}
                  className="hover:bg-gray-50"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={rowVariants}
                  transition={{ duration: 0.18 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {columns.map((column, columnIndex) => (
                    <td key={`${row.id || rowIndex}-${columnIndex}`} className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      {column.render ? column.render(row) : row[column.accessor] ?? '—'}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          )}
        </tbody>
      </table>
    </div>
  );
};