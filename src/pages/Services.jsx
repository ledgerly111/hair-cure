import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Banknote, ArrowLeft, ArrowRight, Scissors, ShieldCheck, Droplet, Star, Feather, Activity } from 'lucide-react';
import { useLocation, Navigate, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';

const Services = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Initialize state from navigation state if present (deep linking)
    const [selectedService, setSelectedService] = useState(location.state?.serviceId || null);

    // Initial List of Services
    const servicesList = [
        {
            id: 'transplant',
            title: "FUE Hair Transplant",
            desc: "The gold standard in hair restoration. Minimally invasive, scarless, and permanently restores your natural hairline.",
            icon: <Scissors size={48} />,
            summary: "Follicular Unit Extraction (FUE) is the most advanced hair transplant technique available. Unlike older methods that leave large linear scars, FUE involves extracting individual hair follicles from a donor area (usually the back of the head) and implanting them precisely into thinning or balding areas.",
            details: {
                benefits: [
                    "No Linear Scarring: Perfect for short haircuts.",
                    "Quick Recovery: Return to work in 3-5 days.",
                    "Natural Results: High-density packing matches your natural growth.",
                    "Permanent Solution: Transplanted hair grows for life."
                ],
                time: "6 - 8 Hours",
                recovery: "3 - 5 Days",
                idealFor: "Male Pattern Baldness, Receding Hairlines"
            },
            procedure: [
                "Consultation & Design: We map your new hairline.",
                "Extraction: Individual follicles are harvested under anesthesia.",
                "Implantation: Follicles are placed at the exact angle of natural growth.",
                "Recovery: Minimal downtime with full support."
            ],
            amount: "Variable (Depends on grafts)",
            cost: "₹30,000 - ₹5,00,000 (Approx.)"
        },
        {
            id: 'beard',
            title: "Beard Transplant",
            desc: "Achieve a full, masculine beard or fill in patches using your own hair follicles.",
            icon: <ShieldCheck size={48} />,
            summary: "A beard transplant is the ultimate solution for men struggling with patchy facial hair or the inability to grow a beard. Using the same sophisticated FUE technique, we harvest fine hair from the scalp and transplant it to the face to create a dense, sculpted beard, goatee, or mustache.",
            details: {
                benefits: [
                    "Defined Look: Sculpt the exact beard shape you want.",
                    "Permanent Growth: The transplanted hair is real and permanent.",
                    "Natural Feel: Can be shaved, trimmed, and styled normally.",
                    "Boosts Confidence: Masculine facial framing."
                ],
                time: "4 - 6 Hours",
                recovery: "5 - 7 Days",
                idealFor: "Patchy Beards, Facial Scarring, Density Boost"
            },
            procedure: [
                "Design: You choose the beard line and density.",
                "Harvesting: Fine hairs chosen to match facial hair texture.",
                "Implantation: Precise placement for valid density.",
                "Growth: New beard hair starts growing in 3-4 months."
            ],
            amount: "Variable",
            cost: "₹40,000 - ₹1,50,000 (Approx.)"
        },
        {
            id: 'prp',
            title: "PRP Therapy",
            desc: "Non-surgical booster using your blood's growth factors to stop hair loss and thicken existing hair.",
            icon: <Droplet size={48} />,
            summary: "Platelet-Rich Plasma (PRP) therapy is a three-step medical treatment in which a person's blood is drawn, processed, and then injected into the scalp. The concentration of platelets releases growth factors that stimulate dormant hair follicles and thicken existing hair shafts.",
            details: {
                benefits: [
                    "100% Natural: Uses your own blood, no chemicals.",
                    "Zero Downtime: Walk in, walk out procedure.",
                    "Preventative: Excellent for slowing down early hair loss.",
                    "Combinable: Enhances results of hair transplants."
                ],
                time: "45 Minutes",
                recovery: "None (Immediate)",
                idealFor: "Early Thinning, Post-Transplant Maintenance"
            },
            procedure: [
                "Draw: A small amount of blood is taken from your arm.",
                "Spin: A centrifuge separates the platelet-rich plasma.",
                "Inject: The plasma is micro-injected into thinning areas.",
                "Repeat: Best results with 3-4 monthly sessions."
            ],
            amount: "Per Session",
            cost: "₹5,000 - ₹10,000"
        },
        {
            id: 'smp',
            title: "Scalp Micropigmentation",
            desc: "A cosmetic tattoo technique that mimics hair follicles for a 'shaved look' or added density.",
            icon: <Star size={48} />,
            summary: "Scalp Micropigmentation (SMP) is a non-invasive treatment that uses distinct pointillism techniques to deposit pigment into the scalp. It creates the illusion of fuller hair for thinning areas or a perfectly shaved head look for baldness.",
            details: {
                benefits: [
                    "Instant Result: Walk out looking younger immediately.",
                    "Non-Surgical: No cutting, no recovery time.",
                    "Camouflage: Hides strip scars from old transplants.",
                    "Maintenance Free: No daily styling required."
                ],
                time: "2 - 4 Hours",
                recovery: "1 - 2 Days (Redness)",
                idealFor: "Buzz Cut Look, Thinning Crowns, Scar Camouflage"
            },
            procedure: [
                "Consultation: Matching pigment to your hair color/skin tone.",
                "First Session: Laying the foundation of density.",
                "Second Session: Adding depth and detail.",
                "Touch-up: Perfecting the look (if needed)."
            ],
            amount: "Based on Area",
            cost: "₹20,000 - ₹80,000"
        },
        {
            id: 'cosmetic',
            title: "Cosmetic Hair Care",
            desc: "Non-invasive aesthetic solutions for instant density, scar camouflage, and hair system integration.",
            icon: <Sparkles size={48} />,
            summary: "Our Cosmetic Hair Care suite offers instant, non-surgical solutions for looking your best. From high-fidelity Hair Replacement Systems (topical units) to advanced scalp treatments, we provide aesthetic mastery for those not seeking surgery.",
            details: {
                benefits: [
                    "Instant Results: Walk out with a full look immediately.",
                    "Non-Invasive: No surgery, no needles, no recovery.",
                    "Customizable: Matches your exact hair color and style.",
                    "Versatile: Swim, shower, and exercise with confidence."
                ],
                time: "2 - 4 Hours",
                recovery: "None",
                idealFor: "Alopecia Totalis, Scar Cover-up, Instant Density"
            },
            procedure: [
                "Consultation: Assessing color, texture, and density needs.",
                "Design/Fitting: Custom molding or pigment mapping.",
                "Application: Secure bonding or precise application.",
                "Styling: Professional cut and blend for a seamless look."
            ],
            amount: "Variable",
            cost: "₹15,000 - ₹60,000"
        },
        {
            id: 'dandruff',
            title: "Dandruff Control",
            desc: "Clinical-grade treatments to eliminate persistent flakes, restore scalp health, and stop itching.",
            icon: <Feather size={48} />,
            summary: "Chronic dandruff is often a sign of scalp dermatitis or fungal imbalance. Our clinical Dandruff Control program goes beyond commercial shampoos. We use prescription-grade antifungals, salicylic acid peels, and light therapy to deep clean the scalp, regulate oil production, and eliminate the root cause of flaking.",
            details: {
                benefits: [
                    "Clinical Strength: More effective than store-bought brands.",
                    "Itch Relief: Soothes inflammation and redness instantly.",
                    "Scalp Detox: Removes deep-seated product buildup.",
                    "Hair Health: A healthy scalp promotes stronger hair growth."
                ],
                time: "60 Minutes",
                recovery: "None",
                idealFor: "Seborrheic Dermatitis, Chronic Flaking, Itchy Scalp"
            },
            procedure: [
                "Analysis: Microscopic scalp exam to identify the cause.",
                "Detox: Chemical exfoliation to remove scales.",
                "Treatment: Application of antifungal/anti-inflammatory agents.",
                "Maintenance: Customized home-care plan."
            ],
            amount: "Per Session",
            cost: "₹2,000 - ₹5,000"
        }
    ];

    // Handle deep linking or missing selection
    useEffect(() => {
        if (location.state?.serviceId) {
            setSelectedService(location.state.serviceId);
        } else {
            // If no sevice selected (e.g. direct access to /services), do not set selectedService
            // Ideally we want to redirect to Home, but we will handle that in render.
            setSelectedService(null);
        }
    }, [location]);

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedService]);

    const handleBack = () => {
        navigate('/');
        // We rely on Home page being the list view.
        // Ideally we could pass a state to scroll to the list, but standard behavior is fine too.
        setTimeout(() => {
            const section = document.getElementById('services-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // If no service selected, Redirect to Home
    // This effectively removes the "List View" from this page, making it Detail-Only.
    if (!selectedService) {
        return <Navigate to="/" replace />;
    }

    // Detail View Only
    const service = servicesList.find(s => s.id === selectedService);
    if (!service) return <Navigate to="/" replace />; // Fallback

    return (
        <div className="service-detail-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--brand-white)' }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >

                    {/* Header / Title Only - NO IMAGE */}
                    <div style={{ background: 'var(--brand-black)', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ padding: 'clamp(4rem, 10vh, 6rem) 2rem 4rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                            <button
                                onClick={handleBack}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'rgba(255,255,255,0.1)', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '30px',
                                    fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', marginBottom: '2rem',
                                    color: 'white', fontSize: '0.9rem',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-black)' }}
                                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white' }}
                            >
                                <ArrowLeft size={18} /> Back
                            </button>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ color: 'var(--brand-orange)', display: 'inline-block' }}>
                                    {React.cloneElement(service.icon, { size: 48 })}
                                </div>
                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    lineHeight: 1,
                                    wordBreak: 'break-word', // Prevents overflow
                                    hyphens: 'auto'
                                }}>
                                    {service.title}
                                </h1>
                            </div>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', lineHeight: 1.6 }}>{service.desc}</p>
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '1px', background: '#e5e7eb', maxWidth: 'var(--container-width)', margin: '0 auto' }}></div>

                    {/* Content */}
                    <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gap: '3rem' }}>

                        {/* Summary Section */}
                        <Reveal>
                            <section>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-black)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Sparkles size={24} color="var(--brand-orange)" /> Summary
                                </h3>
                                <div style={{ background: '#FFF7ED', padding: '2rem', borderRadius: '1rem', border: '1px solid #FFEDD5' }}>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                                        {service.summary}
                                    </p>
                                </div>
                            </section>
                        </Reveal>

                        {/* Procedure Section */}
                        <Reveal>
                            <section>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-black)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={24} color="var(--brand-orange)" /> Procedure
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                    {service.procedure.map((step, i) => (
                                        <div
                                            key={i}
                                            style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}
                                        >
                                            <div style={{ width: '25px', height: '25px', background: 'var(--brand-orange)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '1rem' }}>
                                                {i + 1}
                                            </div>
                                            <p style={{ color: '#333', fontWeight: 500 }}>{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* Key Facts Grid */}
                        <Reveal>
                            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ padding: '1.5rem', background: '#F9FAFB', borderRadius: '1rem', border: '1px solid #e5e7eb' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', opacity: 0.7 }}>
                                        <Clock size={16} /> <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Time</span>
                                    </div>
                                    <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>{service.details.time}</p>
                                </div>
                                <div style={{ padding: '1.5rem', background: '#F9FAFB', borderRadius: '1rem', border: '1px solid #e5e7eb' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', opacity: 0.7 }}>
                                        <Activity size={16} /> <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Recovery</span>
                                    </div>
                                    <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>{service.details.recovery}</p>
                                </div>
                            </section>
                        </Reveal>

                        {/* Cost & Amount Section */}
                        <Reveal>
                            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div style={{ background: 'var(--brand-black)', color: 'white', padding: '2rem', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }}>
                                        <Banknote size={150} />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>Estimated Cost</h4>
                                    <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--brand-orange)' }}>{service.cost}</p>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '0.5rem' }}>*Final price determined after consultation</p>
                                </div>

                                <div style={{ background: '#F3F4F6', padding: '2rem', borderRadius: '1rem', border: '1px solid #e5e7eb' }}>
                                    <h4 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>Service Type / Amount</h4>
                                    <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#333' }}>{service.amount}</p>
                                </div>
                            </section>
                        </Reveal>

                        {/* CTA */}
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <Link to="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                                padding: '1rem 3rem', background: 'var(--brand-orange)',
                                color: 'white', fontWeight: 800, textTransform: 'uppercase',
                                borderRadius: '50px', textDecoration: 'none',
                                boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.3)'
                            }}>
                                Book Consultation <ArrowRight size={20} />
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Services;
