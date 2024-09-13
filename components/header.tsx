import { motion } from 'framer-motion';

export const Header = ({ label, hightlight }: { label: string; hightlight?: string }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full text-center">
      <h1 className="text-3xl font-semibold uppercase text-secondary mb-4">
        {label} <span className="text-dark-primary">{hightlight}</span>
      </h1>
      <hr />
    </motion.div>
  );
};
