
import {
  Activity,
  Gauge,
  Settings,
  Box,
  Layers,
  Workflow,
  ShieldCheck,
  FileText,
  CircleDot,
  Move3D,
  ChartNoAxesCombined,
  Lightbulb,
  DraftingCompass,
  Handshake,
  Search,
  Factory,
  Users,
  Waves,
} from "lucide-react";

export const services = [

  // 1. VEHICLE DYNAMICS & CHASSIS ENGINEERING

  {
    title: "Vehicle Dynamics & Chassis Engineering",
    icon: Activity,

    description:
      "We provide vehicle dynamics and chassis engineering solutions for suspension, steering, braking, and overall vehicle dynamics, focusing on improving ride comfort, handling, stability, and vehicle performance.",

    image: "/1.png",

    points: [
      "Advanced Vehicle Dynamics & Performance Analysis",
      "Suspension, Steering & Braking System Engineering",
      "Ride Comfort & Handling Optimisation",
      "Tyre Modelling & Performance Evaluation",
      "Chassis Stability & Vehicle Control Analysis",
      "Vehicle Testing, Validation & Engineering Assessment",
    ],

    items: [
      {
        title: "Tire Modeling, Testing & Analysis",
        icon: CircleDot,
        image: "/1.png",

        description:
          "We provide tyre modelling, performance optimisation, testing, and data analysis solutions, along with specialist vehicle dynamics support.",

        sections: [
          {
            title: "Tire Mathematical Modelling",
            description:
              "Development of physics-based and empirical tyre models to predict tyre forces, moments, and behaviour under varied operating conditions.",
            points: [
              "Pacejka Magic Formula MF5.2 / 6.1 / 6.2 / MF 1.1",
              "Custom tyre model development and tools",
              "Cornering and longitudinal stiffness",
              "Load and inflation sensitivity",
              "Parameter identification and fitting",
              "Tyre simulation and .tir parameter files",
              "TYDEX data processing and custom simulation tools",
              "FTire and CDTire",
            ],
          },
          {
            title: "Tire Performance & Optimisation",
            description:
              "Evaluation and optimisation of tyre grip, handling, stability, and performance across different driving conditions.",
            points: [
              "Tyre characterisation and performance optimisation",
              "Contact patch analysis",
              "Vertical stiffness and deflection analysis",
              "Rolling resistance analysis",
              "Thermal tyre analysis",
              "Temperature, load, and pressure sensitivity",
              "Tyre braking analysis",
            ],
          },
          {
            title: "Tire Testing & Data Analysis",
            description:
              "Analysis of experimental tyre data to evaluate force characteristics, validate models, and assess tyre performance.",
            points: [
              "Tyre test strategy and planning",
              "Rolling resistance and high-speed testing",
              "Static and dynamic footprint testing",
              "Test data analysis and model correlation",
              "Test reporting and test matrix optimisation",
            ],
          },
          {
            title: "Motorsport Formula Student",
            description:
              "Engineering support for Formula Student teams to improve tyre modelling, performance, and on-track handling.",
            points: [
              "Formula Student tyre consulting",
              "Tyre race data analysis and optimisation",
            ],
          },
        ],
      },

      {
        title: "Braking System Design & Performance",
        icon: Activity,
        image: "/2.png",

        description:
          "We analyse braking system performance to improve stopping capability, braking stability, and overall vehicle safety under different driving conditions.",

        points: [
          "Brake Force Distribution Analysis",
          "Stopping Distance & Deceleration Analysis",
          "Brake System Performance Evaluation",
        ],
      },

      {
        title: "Suspension Design & Ride",
        icon: Move3D,
        image: "/1.png",

        description:
          "We provide suspension engineering solutions to improve ride comfort, handling behaviour, and vehicle stability through suspension design and performance evaluation.",

        points: [
          "Suspension Geometry & Kinematics",
          "Ride Comfort & Handling Analysis",
          "Spring & Damper Performance Evaluation",
        ],
      },

      {
        title: "Steering System Engineering",
        icon: Settings,
        image: "/2.png",

        description:
          "We evaluate steering geometry, response, and system performance to support precise directional control and predictable vehicle handling.",

        points: [
          "Steering Geometry & Kinematics",
          "Steering Ratio & Response Analysis",
          "Steering System Performance Evaluation",
        ],
      },

      {
        title: "Chassis Dynamics & Stability",
        icon: ChartNoAxesCombined,
        image: "/3.png",

        description:
          "We analyse chassis behaviour and vehicle stability to improve handling response, cornering performance, and dynamic safety.",

        points: [
          "Lateral Dynamics & Handling Analysis",
          "Yaw Stability & Roll Behaviour",
          "Vehicle Stability Assessment",
        ],
      },

      {
        title: "Vehicle Mass, Inertia & CG Evaluation",
        icon: Gauge,
        image: "/4.png",

        description:
          "We evaluate vehicle mass properties and centre of gravity characteristics to understand their influence on vehicle dynamics, stability, and performance.",

        points: [
          "Vehicle Mass Distribution Analysis",
          "Centre of Gravity (CG) Evaluation",
          "Mass Moment of Inertia Calculation",
        ],
      },
    ],
  },

  // 2. POWERTRAIN & ENERGY SYSTEMS ENGINEERING

  {
    title: "Powertrain & Energy Systems Engineering",
    icon: Gauge,

    description:
      "We support the development and analysis of conventional, hybrid, and electric powertrains through performance calculations, system modelling, energy consumption analysis, and efficiency optimisation.",

    image: "/2.png",

    points: [
      "Conventional, Hybrid & Electric Powertrain Solutions",
      "Energy Management & Efficiency Optimisation",
      "Powertrain Design & Component Sizing",
      "Drive Cycle Modelling & Simulation",
      "Vehicle Performance & Dynamics Analysis",
      "Powertrain System Integration & Evaluation",
    ],

    items: [
      {
        title: "Energy Management & Drive Cycle Simulation",
        icon: Activity,
        image: "/1.png",

        description:
          "We provide energy management and drive cycle simulation solutions to evaluate vehicle energy consumption, optimise powertrain efficiency, and improve electric vehicle range and overall performance.",

        points: [
          "Drive Cycle Modelling & Simulation",
          "Energy Consumption & Efficiency Analysis",
          "Energy Management Strategy & Optimisation",
        ],
      },

      {
        title: "Powertrain Design, Sizing & Optimisation",
        icon: Settings,
        image: "/2.png",

        description:
          "We provide end-to-end powertrain design, sizing, simulation, and optimisation solutions to improve vehicle performance, drivetrain efficiency, energy utilisation, and overall powertrain capability.",

        points: [
          "Powertrain Architecture & System Design",
          "Electric Motor & Powertrain Component Sizing",
          "Transmission & Gear Ratio Optimisation",
        ],
      },

      {
        title: "Vehicle Performance & Longitudinal Dynamics",
        icon: Gauge,
        image: "/3.png",

        description:
          "We provide comprehensive vehicle performance modelling, simulation, and analysis to evaluate longitudinal vehicle behaviour, optimise tractive performance, and improve acceleration, gradeability, and overall driving efficiency.",

        points: [
          "Road Load & Resistance Analysis",
          "Tractive Effort & Wheel Torque Analysis",
          "Acceleration & Maximum Speed Performance",
          "Gradeability & Hill-Climbing Performance",
        ],
      },
    ],
  },

  // 3. COMPUTER-AIDED DESIGN & ENGINEERING (CAD/CAE)

  {
    title: "Computer-Aided Design & Engineering (CAD/CAE)",
    icon: Settings,

    description:
      "We provide advanced computer-aided design and engineering solutions, combining 3D modelling, structural analysis, and engineering simulations to improve product design, evaluate component behaviour, and validate performance before physical development.",

    image: "/3.png",

    points: [
      "Advanced CAD Modelling & Engineering Design",
      "Structural Performance & Design Evaluation",
      "Engineering Simulation & Analysis",
      "Product Development & Design Optimisation",
      "Component Strength & Durability Assessment",
      "Virtual Testing & Design Validation",
    ],

    items: [
      {
        title: "CAD Modelling & Engineering Design",
        icon: Box,
        image: "/1.png",

        description:
          "We develop detailed 3D CAD models and engineering designs to support automotive component development, assembly integration, and design evaluation.",

        points: [
          "3D Part & Assembly Modelling",
          "Automotive Component Design",
          "Surface & Parametric Modelling",
        ],
      },

      {
        title: "Structural & Finite Element Analysis (FEA)",
        icon: Layers,
        image: "/2.png",

        description:
          "We perform structural simulations to evaluate component strength, stiffness, stress distribution, and deformation under different loading conditions.",

        points: [
          "Static Structural Analysis",
          "Stress & Deformation Analysis",
          "Load & Boundary Condition Evaluation",
        ],
      },

      {
        title: "Multibody Dynamics (MBD) Simulation",
        icon: Workflow,
        image: "/3.png",

        description:
          "We simulate the motion and interaction of interconnected mechanical systems to evaluate kinematic behaviour, dynamic response, and overall system performance.",

        points: [
          "Kinematic & Motion Analysis",
          "Suspension System Simulation",
          "Dynamic Force & Motion Evaluation",
        ],
      },

      {
        title: "Frontal Crash Simulation",
        icon: ShieldCheck,
        image: "/4.png",

        description:
          "We analyse vehicle structural behaviour during frontal impact events to evaluate deformation patterns, energy absorption, and occupant safety performance.",

        points: [
          "Frontal Impact Analysis",
          "Structural Deformation Assessment",
          "Crash Energy Absorption Evaluation",
        ],
      },

      {
        title: "Model Refinement & Reporting",
        icon: FileText,
        image: "/1.png",

        description:
          "We refine engineering models, review simulation outcomes, and prepare technical documentation to improve design accuracy and support engineering decisions.",

        points: [
          "CAD & CAE Model Refinement",
          "Simulation Result Interpretation",
          "Technical Documentation & Reporting",
        ],
      },

      {
        title: "Bending Analysis",
        icon: Activity,
        image: "/2.png",

        description:
          "We evaluate the bending behaviour of engineering components under applied loads to assess structural strength, deformation, and resistance to failure.",

        points: [
          "Bending Stress & Strain Analysis",
          "Deflection & Load Assessment",
          "Structural Strength Evaluation",
        ],
      },
    ],
  },

  // 4. ENGINEERING CONSULTING & TECHNICAL ADVISORY

  {
    title: "Engineering Consulting & Technical Advisory",
    icon: Lightbulb,

    description:
      "We work closely with companies to address engineering challenges through technical expertise, design evaluations, analytical calculations, simulations, and practical engineering recommendations.",

    image: "/4.png",

    points: [
      "Engineering Problem Solving & Technical Guidance",
      "Design Review & Performance Evaluation",
      "Engineering Calculations & Feasibility Studies",
      "Simulation-Based Technical Assessment",
      "Product Development & Design Recommendations",
      "Project-Specific Engineering Support",
    ],

    items: [
      {
        title: "Engineering Design & Technical Consultation",
        icon: DraftingCompass,
        image: "/1.png",

        description:
          "We provide engineering design guidance and technical consultation to help businesses evaluate design concepts, resolve engineering challenges, and make informed technical decisions.",

        points: [
          "Engineering Design Review & Assessment",
          "Technical Feasibility & Concept Evaluation",
          "Design Improvement Recommendations",
        ],
      },

      {
        title: "Simulation, Analysis & Technical Validation",
        icon: ChartNoAxesCombined,
        image: "/2.png",

        description:
          "We support engineering decisions through analytical calculations, simulation studies, and technical evaluations to assess design performance and validate engineering solutions.",

        points: [
          "Engineering Calculations & Analytical Studies",
          "Simulation Results & Performance Evaluation",
          "Technical Verification & Validation",
        ],
      },

      {
        title: "Project-Based Engineering Support & Advisory",
        icon: Handshake,
        image: "/3.png",

        description:
          "We provide flexible engineering assistance and technical advisory throughout different project stages, helping companies address specific requirements and overcome development challenges.",

        points: [
          "Project-Specific Engineering Assistance",
          "Technical Problem Solving & Troubleshooting",
          "Engineering Recommendations & Project Guidance",
        ],
      },
    ],
  },

  // 5. TECHNICAL SOURCING & ENGINEERING PARTNERSHIPS

  {
    title: "Technical Sourcing & Engineering Partnerships",
    icon: Handshake,

    description:
      "We connect companies with suitable engineering service providers, technical experts, testing facilities, and manufacturing partners based on their specific project requirements.",

    image: "/1.png",

    points: [
      "Engineering Service Provider Network",
      "Technical Resource Identification & Coordination",
      "Testing & Validation Partner Sourcing",
      "Manufacturing & Industrial Partnerships",
      "Technical Talent & Expertise Sourcing",
      "Strategic Engineering Collaboration",
    ],

    items: [
      {
        title: "Engineering Services Sourcing & Coordination",
        icon: Search,
        image: "/1.png",

        description:
          "We help companies identify and connect with suitable engineering service providers based on project scope, technical requirements, and business objectives.",

        points: [
          "Engineering Service Provider Identification",
          "Technical Capability & Requirement Assessment",
          "Service Partner Coordination",
        ],
      },

      {
        title: "Testing, Validation & Manufacturing Partnerships",
        icon: Factory,
        image: "/2.png",

        description:
          "We connect businesses with appropriate testing facilities, validation experts, and manufacturing partners to support product development and engineering requirements.",

        points: [
          "Testing & Validation Facility Sourcing",
          "Manufacturing Partner Identification",
          "Testing & Production Coordination",
        ],
      },

      {
        title: "Technical Talent & Strategic Engineering Partnerships",
        icon: Users,
        image: "/3.png",

        description:
          "We facilitate connections with skilled technical professionals, engineering specialists, and strategic partners to support project execution and long-term engineering collaboration.",

        points: [
          "Technical Expert & Specialist Sourcing",
          "Engineering Talent Identification",
          "Strategic Technical Partnerships",
        ],
      },
    ],
  },

];

export const projects = [];

export function slugifyServiceName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
