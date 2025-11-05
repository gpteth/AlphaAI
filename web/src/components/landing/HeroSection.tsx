import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { t, Language } from '../../i18n/translations'

interface HeroSectionProps {
  language: Language
}

export default function HeroSection({ language }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const handControls = useAnimation()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  }
  const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } }

  return (
    <section className='relative pt-32 pb-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div className='space-y-6 relative z-10' style={{ opacity, scale }} initial='initial' animate='animate' variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.div
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6'
                style={{ background: 'rgba(240, 185, 11, 0.1)', border: '1px solid rgba(240, 185, 11, 0.2)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(240, 185, 11, 0.2)' }}
              >
                <Sparkles className='w-4 h-4' style={{ color: 'var(--brand-yellow)' }} />
                <span className='text-sm font-semibold' style={{ color: 'var(--brand-yellow)' }}>
{t('githubStarsInDays', language)}
                </span>
              </motion.div>
            </motion.div>

            <h1 className='text-5xl lg:text-7xl font-bold leading-tight' style={{ color: 'var(--brand-light-gray)' }}>
              {t('heroTitle1', language)}
              <br />
              <span style={{ color: 'var(--brand-yellow)' }}>{t('heroTitle2', language)}</span>
            </h1>

            <motion.p className='text-xl leading-relaxed' style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
              {t('heroDescription', language)}
            </motion.p>

            <div className='flex items-center gap-3 flex-wrap'>
              <motion.a href='https://github.com/gpteth/AlphaAI' target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }}>
                <img
                  src='https://img.shields.io/github/stars/Alan-community/AlphaAI?style=for-the-badge&logo=github&logoColor=white&color=F0B90B&labelColor=0A0A0A'
                  alt='GitHub Stars'
                  className='h-7'
                />
              </motion.a>
              <motion.a href='https://github.com/gpteth/AlphaAI/network/members' target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }}>
                <img
                  src='https://img.shields.io/github/forks/Alan-community/AlphaAI?style=for-the-badge&logo=github&logoColor=white&color=F0B90B&labelColor=0A0A0A'
                  alt='GitHub Forks'
                  className='h-7'
                />
              </motion.a>
              <motion.a href='https://github.com/gpteth/AlphaAI/graphs/contributors' target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }}>
                <img
                  src='https://img.shields.io/github/contributors/Alan-community/AlphaAI?style=for-the-badge&logo=github&logoColor=white&color=F0B90B&labelColor=0A0A0A'
                  alt='GitHub Contributors'
                  className='h-7'
                />
              </motion.a>
            </div>

            <motion.p className='text-xs pt-4' style={{ color: 'var(--text-tertiary)' }} variants={fadeInUp}>
{t('poweredBy', language)}
            </motion.p>
          </motion.div>

          {/* Right Visual - Interactive Robot */}
          <div 
            className='relative w-full cursor-pointer'
            onMouseEnter={() => {
              handControls.start({
                y: [-8, 8, -8],
                rotate: [-3, 3, -3],
                x: [-2, 2, -2],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }
              })
            }}
            onMouseLeave={() => {
              handControls.start({
                y: 0,
                rotate: 0,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              })
            }}
          >
            {/* Placeholder for hero image */}
            <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg'>
              <div className='text-center text-gray-400'>
                <svg className='w-32 h-32 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
                <p className='text-lg'>AI Trading Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

