import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/logo-emprestimo.png'

const links = [
  { label: 'Escolha seu crédito', href: '#produtos' },
  { label: 'Soluções para você', href: '#solucoes' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  const handleNavClick = (event, href) => {
    if (!href.startsWith('#')) {
      return
    }

    event.preventDefault()
    setMenuOpen(false)

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Página inicial">
          <img src={logo} alt="Logo da empresa" className="brand-logo" />
        </a>

        <nav className="header-nav" aria-label="Menu principal">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="#produtos"
            className="header-cta"
            onClick={(event) => handleNavClick(event, '#produtos')}
          >
            Simular agora
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__header">
          <img src={logo} alt="Logo da empresa" className="mobile-menu__logo" />
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Menu mobile">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#produtos"
          className="mobile-menu__cta"
          onClick={(event) => handleNavClick(event, '#produtos')}
        >
          Simular agora
        </a>
      </div>
    </header>
  )
}
