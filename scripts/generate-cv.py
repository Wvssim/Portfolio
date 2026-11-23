#!/usr/bin/env python3
"""
Generate an updated CV for Wassim Lazim highlighting Portfolio v2.0 upgrades
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
from reportlab.lib import colors

def create_cv():
    """Create updated CV PDF"""
    output_path = "Wassim_Lazim_CV_v2.pdf"
    doc = SimpleDocTemplate(output_path, pagesize=letter,
                          rightMargin=0.5*inch, leftMargin=0.5*inch,
                          topMargin=0.5*inch, bottomMargin=0.5*inch)

    story = []
    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=20,
        textColor=colors.HexColor('#110D07'),
        spaceAfter=3,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )

    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#3D3529'),
        alignment=TA_CENTER,
        spaceAfter=10,
    )

    section_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Heading2'],
        fontSize=11,
        textColor=colors.HexColor('#110D07'),
        spaceAfter=6,
        spaceBefore=6,
        fontName='Helvetica-Bold',
        borderColor=colors.HexColor('#B8862A'),
        borderWidth=0.5,
        borderPadding=3,
    )

    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=9,
        leading=11,
        textColor=colors.HexColor('#110D07'),
    )

    # Header
    story.append(Paragraph("WASSIM LAZIM", title_style))
    story.append(Paragraph("ÉLÈVE-INGÉNIEUR | DÉVELOPPEUR FULL STACK | CREATIVE TECHNOLOGIST", subtitle_style))
    story.append(Spacer(1, 0.1*inch))

    # Contact info
    contact_data = [
        [
            Paragraph("+212 6 63 22 37 79", normal_style),
            Paragraph("Wassimlazim7@gmail.com", normal_style),
            Paragraph("github.com/Wvssim", normal_style),
        ]
    ]
    contact_table = Table(contact_data, colWidths=[2*inch, 2.5*inch, 2*inch])
    contact_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 0.15*inch))

    # Profil
    story.append(Paragraph("PROFIL", section_style))
    story.append(Paragraph(
        "Élève-ingénieur en 4ème année à l'EMSI, spécialisé dans le développement de solutions digitales avec focus sur les animations avancées et l'optimisation UX. Architecte Full Stack passionné par l'innovation technologique — j'allie autonomie technique, rigueur méthodologique et créativité pour concevoir des expériences numériques performantes, sécurisées et captivantes.",
        normal_style
    ))
    story.append(Spacer(1, 0.1*inch))

    # Expérience
    story.append(Paragraph("EXPÉRIENCE", section_style))

    exp_items = [
        {
            'title': 'SWH NÉGOCE | DÉVELOPPEUR FULL STACK (PROJET ENTREPRENEURIAL)',
            'date': 'Depuis Juillet 2025 (en cours)',
            'bullets': [
                'Conception & Pilotage : Architecture logicielle évolutive pour gestion de catalogues et facturation',
                'Développement d\'API sécurisées, bases de données relationnelles et automatisation des flux',
                'Interface performante : Tailwind CSS, Framer Motion, React Query pour UX fluide',
                'CI/CD : Déploiement continu sur Vercel et tests pour garantir disponibilité',
            ]
        },
        {
            'title': 'ENES SOCIÉTÉ SARL | DÉVELOPPEUR BACKEND (STAGE)',
            'date': 'Juin 2025 – Juillet 2025 | Casablanca',
            'bullets': [
                'Architecture API : Conception de services pour l\'automatisation des processus internes',
                'Gestion de données : Structuration et optimisation des bases de données PostgreSQL',
                'Maintenabilité : Code propre, architecture modulaire pour faciliter évolutions futures',
            ]
        }
    ]

    for exp in exp_items:
        story.append(Paragraph(f"<b>{exp['title']}</b>", normal_style))
        story.append(Paragraph(f"<i>{exp['date']}</i>", normal_style))
        for bullet in exp['bullets']:
            story.append(Paragraph(f"• {bullet}", normal_style))
        story.append(Spacer(1, 0.08*inch))

    # Compétences Techniques
    story.append(Paragraph("COMPÉTENCES TECHNIQUES", section_style))

    skills_text = """
    <b>Développement Frontend</b><br/>
    • Core: JavaScript (ES6+), TypeScript, React, Next.js<br/>
    • Animation avancée: Framer Motion (scroll-triggered, viewport animations), GSAP 3 (timelines, interactions)<br/>
    • Smooth scroll: Lenis pour expérience fluide cross-device<br/>
    • Stylisation: Tailwind CSS, Radix UI (25+ composants), CSS-in-JS<br/>
    • Gestion d'État: Zustand, React Query (TanStack), React Hook Form<br/>
    • Canvas & Graphics: Three.js, React Three Fiber (prêt pour 3D)<br/>
    <br/>
    <b>Architecture Backend & Data</b><br/>
    • Environnements: Node.js, Express.js, Next.js API Routes, PHP (Laravel, Symfony)<br/>
    • Bases de Données: PostgreSQL (Supabase), MongoDB, Firebase<br/>
    • API REST: Conception sécurisée, authentification JWT/OAuth<br/>
    <br/>
    <b>CMS & E-Commerce</b><br/>
    • Headless CMS: Sanity.io (GROQ, schéma modeling)<br/>
    • Catalogues produits, SEO structuration, optimisation des slugs<br/>
    <br/>
    <b>DevOps & Qualité</b><br/>
    • CI/CD: Git/GitHub, Docker (notions), déploiement Vercel/Netlify<br/>
    • Qualité: ESLint, Prettier, Tests (Jest, Testing Library)<br/>
    • Performance: Web Vitals (Lighthouse), optimisation images (Sharp)<br/>
    <br/>
    <b>Design & Méthodologies</b><br/>
    • Design: Figma, Mobile-first, Responsive, A11y (WCAG 2.1)<br/>
    • IA: Prompt Engineering (Claude, ChatGPT), GitHub Copilot<br/>
    """

    story.append(Paragraph(skills_text, normal_style))
    story.append(Spacer(1, 0.1*inch))

    # Projets
    story.append(Paragraph("PROJETS ACADÉMIQUES & PERSONNELS", section_style))

    projects = [
        {
            'title': 'PORTFOLIO v2.0 | ANIMATIONS AVANCÉES',
            'highlights': [
                'Migration Next.js avec Framer Motion et GSAP pour animations révélatrices',
                'Système de particules Canvas réactif à la souris avec performance optimization',
                'Smooth scroll Lenis intégré globalement, ThreeJS prêt pour 3D',
                'Architecture animation library réutilisable (BlurIn, SlideIn, BoxReveal, ScaleIn)',
            ]
        },
        {
            'title': 'EMSI CHATBOT | IA GÉNÉRATIVE (RAG)',
            'highlights': [
                'Architecture RAG: Pipeline LangChain pour analyse PDF et indexation vectorielle',
                'Optimisation IA: Groq pour inférence haute performance',
                'UI interactive Streamlit pour interrogation temps réel',
            ]
        },
        {
            'title': 'MONITORING IOT | MOBILE MQTT',
            'highlights': [
                'Application Android Kotlin pour supervision IoT en temps réel',
                'Protocole MQTT (HiveMQ) pour communication Publishers/Subscribers',
                'Dashboard dynamique visualisation capteurs',
            ]
        }
    ]

    for proj in projects:
        story.append(Paragraph(f"<b>{proj['title']}</b>", normal_style))
        for highlight in proj['highlights']:
            story.append(Paragraph(f"• {highlight}", normal_style))
        story.append(Spacer(1, 0.05*inch))

    story.append(Spacer(1, 0.1*inch))

    # Formation
    story.append(Paragraph("FORMATION", section_style))

    formation_text = """
    <b>EMSI Oranger – Casablanca</b> (2024 – 2026, en cours)<br/>
    Diplôme d'ingénieur en informatique (DSI) – Développement des Systèmes d'Information<br/>
    <br/>
    <b>CFPM Skhirat</b> (2023 – 2024)<br/>
    Diplôme Technicien Spécialisé – Développement Digital Web Full-Stack<br/>
    <br/>
    <b>Baccalauréat – Sciences Physique-Chimie</b> (2021-2022)<br/>
    """

    story.append(Paragraph(formation_text, normal_style))
    story.append(Spacer(1, 0.1*inch))

    # Certifications
    story.append(Paragraph("CERTIFICATIONS & FORMATIONS CONTINUES", section_style))

    certs_text = """
    • React & React Native (Meta)<br/>
    • Google Cloud Core Infrastructure (Google)<br/>
    • Software Engineering (HKUST)<br/>
    • Unix & Python (JHU/UMich)<br/>
    """

    story.append(Paragraph(certs_text, normal_style))
    story.append(Spacer(1, 0.08*inch))

    # Langues
    story.append(Paragraph("LANGUES", section_style))

    langs_text = """
    • Français: Courant / Bilingue<br/>
    • Anglais: Professionnel (B2/C1)<br/>
    • Arabe: Langue maternelle<br/>
    """

    story.append(Paragraph(langs_text, normal_style))

    # Build PDF
    doc.build(story)
    print(f"✓ CV créé: {output_path}")

if __name__ == "__main__":
    create_cv()
