import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  icon: Icon,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25 px-7 py-3.5 text-base",
    secondary:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-7 py-3.5 text-base",
    outline:
      "bg-transparent text-navy-900 border-2 border-navy-200 hover:border-electric-500 hover:text-electric-600 px-7 py-3.5 text-base",
    ghost:
      "bg-transparent text-navy-600 hover:text-electric-600 hover:bg-navy-50 px-4 py-2 text-sm",
  };

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {Icon && <Icon size={18} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
}
