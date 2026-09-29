import { EducationItem, Project, Skill } from '../types/portfolio';

export const personalInfo = {
  fullName: 'Akok Mayol Akok',
  shortName: 'Akok Mayol',
  profession: 'Cybersecurity Student',
  university: 'University of Juba',
  department: 'Department of Cybersecurity',
  location: 'Juba, South Sudan',
  email: 'cosmiqakok@gmail.com',
  status: 'Undergraduate Cybersecurity Researcher',
  bioIntro:
    "I am an enthusiastic Cybersecurity student at the University of Juba with an enduring curiosity for computer security, defensive networking, low-level programming, and software engineering. I focus on understanding both system vulnerabilities and proactive defense strategies to build safer digital ecosystems in South Sudan and across the globe.",
  fullBio:
    "As an undergraduate in the Department of Cybersecurity at the University of Juba, my academic journey is centered around system architecture, secure network protocols, defensive penetration concepts, and algorithmic problem-solving. My technical exploration bridges both low-level C programming—where understanding memory allocation and hardware interaction is critical to finding vulnerabilities—and modern Python automation for security scripting and tooling. When I am not dissecting network packets or writing code, I actively collaborate on technical projects, explore open-source tools, and refine my skills in software development and technical documentation.",
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:cosmiqakok@gmail.com',
  },
};

export const skillsData: Skill[] = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'cybersecurity',
    level: 'Core Discipline',
    description:
      'Foundational understanding of network defenses, vulnerability assessments, information assurance, and security protocols.',
    topics: [
      'Network Security & Firewalls',
      'Port Scanning & Threat Surface Mapping',
      'Vulnerability Assessment Principles',
      'Basics of Cryptography & Hash Functions',
      'OWASP Top 10 Security Awareness',
      'Linux Server Security & Permissions',
    ],
    iconName: 'ShieldAlert',
  },
  {
    id: 'python-programming',
    name: 'Python Programming',
    category: 'programming',
    level: 'Proficient',
    description:
      'Writing modular scripts for automation, data processing, cryptographic utilities, and rapid prototype development.',
    topics: [
      'Automation & System Scripting',
      'Socket Programming for Network Utilities',
      'Data Structures & Algorithm Implementation',
      'Security Tooling & Log Parsing',
      'Object-Oriented Architecture',
      'CLI & GUI Tool Development',
    ],
    iconName: 'Code',
  },
  {
    id: 'c-programming',
    name: 'C Programming',
    category: 'programming',
    level: 'Intermediate',
    description:
      'Low-level system programming, memory management, pointers, and direct operating system interaction.',
    topics: [
      'Pointers, Arrays & Dynamic Memory (malloc/free)',
      'Buffer Safety & Memory Leak Prevention',
      'Bitwise Operations & XOR Data Masking',
      'File I/O & Binary File Handling',
      'Custom Data Structures (Linked Lists, Stacks)',
      'Compiling with GCC & Linux Debugging',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'programming',
    level: 'Intermediate',
    description:
      'Creating responsive, accessible user interfaces with semantic HTML5, modern CSS/Tailwind, and JavaScript/TypeScript.',
    topics: [
      'Semantic HTML5 & DOM Architecture',
      'Modern Responsive CSS & Tailwind CSS',
      'JavaScript (ES6+) & TypeScript',
      'React Component Lifecycle & Hooks',
      'REST APIs & Asynchronous Data Fetching',
      'Client-side Security & Input Sanitization',
    ],
    iconName: 'Globe',
  },
  {
    id: 'microsoft-office',
    name: 'Microsoft Office',
    category: 'tools',
    level: 'Advanced',
    description:
      'Professional document synthesis, technical reporting, structured data management, and executive presentations.',
    topics: [
      'Word: Technical Reports & Formatted Documentation',
      'Excel: Data Formatting, Formulas & Analysis',
      'PowerPoint: Technical Briefings & Security Slides',
      'Collaborative Cloud Documents & Versioning',
      'Standardized Security Audit Report Structuring',
    ],
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'soft-skills',
    level: 'Core Strength',
    description:
      'Structured analytical thinking, algorithmic debugging, threat vector mapping, and root cause diagnosis.',
    topics: [
      'Analytical Root Cause Analysis',
      'Algorithmic Complexity & Optimization',
      'Systematic Debugging & Diagnostic Tracing',
      'Security Threat Modeling',
      'Adaptability to Emerging Technologies',
    ],
    iconName: 'BrainCircuit',
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'soft-skills',
    level: 'Advanced',
    description:
      'Clearly articulating technical vulnerabilities, engineering concepts, and project progress across technical and non-technical stakeholders.',
    topics: [
      'Technical Documentation & Readmes',
      'Academic Seminar Presentations',
      'Cross-Team Security Briefings',
      'Active Listening & Feedback Integration',
      'Formal Professional Correspondence',
    ],
    iconName: 'MessagesSquare',
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    category: 'soft-skills',
    level: 'Core Strength',
    description:
      'Collaborating effectively within academic study cohorts, developer teams, and cross-functional group projects.',
    topics: [
      'Git Version Control & Branch Collaboration',
      'Peer Code Review & constructive critique',
      'Task Delegation & Academic Team Leadership',
      'Group Research & Lab Experimentation',
      'Shared Responsibility & Accountability',
    ],
    iconName: 'Users',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'univ-juba',
    institution: 'University of Juba',
    department: 'Department of Cybersecurity',
    degree: 'Bachelor of Science in Cybersecurity',
    period: '2023 – Present',
    location: 'Juba, South Sudan',
    description:
      'Pursuing an in-depth undergraduate degree focused on network defense, cryptographic fundamentals, information systems security, and systems programming.',
    highlights: [
      'Core Coursework: Network Architecture, Principles of Cybersecurity, C Systems Programming, Linux OS Internals, Discrete Mathematics',
      'Hands-on laboratory training in local network simulation, packet capturing, and security auditing',
      'Active member of the University Technology & Cybersecurity student study group',
      'Maintaining strong academic performance with a focus on practical security implementations',
    ],
  },
  {
    id: 'juba-diplomatic',
    institution: 'Juba Diplomatic Secondary School',
    degree: 'Secondary School Certificate',
    period: '2022 – 2023',
    location: 'Juba, South Sudan',
    description:
      'Completed secondary education with focused distinction in mathematics, physics, and science disciplines, laying the mathematical foundation for computer science.',
    highlights: [
      'Graduated with honors in Mathematics and Physical Sciences',
      'Founding member of the Student Science & Tech Club',
      'Demonstrated strong analytical aptitude and leadership in student team activities',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'python-calculator',
    title: 'Python Calculator',
    subtitle: 'Modular Mathematical Engine & Expression Evaluator',
    category: 'Python Programming',
    shortDescription:
      'A robust, feature-rich arithmetic and scientific computation utility with comprehensive input validation, mathematical history tracking, and error handling.',
    fullDescription:
      'The Python Calculator is a dual-mode application designed for both command-line efficiency and graphical clarity. Built with a focus on secure input parsing, it prevents arbitrary code execution vulnerabilities often found in naive `eval()` implementations by using strict Abstract Syntax Tree (AST) parsing. It supports arithmetic operations, trigonometric calculations, logarithmic expressions, and maintains an audit trail of calculation history.',
    technologies: ['Python 3', 'AST Parser', 'Tkinter / CLI', 'Regex Validation', 'Unit Testing'],
    keyFeatures: [
      'Safe mathematical expression evaluation using AST tokenization (no unsafe eval)',
      'Interactive command-line interface with persistent session memory',
      'Comprehensive error handling for zero-division, syntax discrepancies, and overflow',
      'Calculation history logging with timestamped export option',
      'Memory recall functions (M+, M-, MR, MC) for multi-step engineering calculations',
    ],
    codeSnippet: {
      language: 'python',
      filename: 'calculator_engine.py',
      code: `import ast
import operator
import math

class SafeMathEvaluator:
    """Safe mathematical evaluator using AST to prevent code injection."""
    
    ALLOWED_OPERATORS = {
        ast.Add: operator.add,
        ast.Sub: operator.sub,
        ast.Mult: operator.mul,
        ast.Div: operator.truediv,
        ast.Pow: operator.pow,
        ast.USub: operator.neg,
        ast.Mod: operator.mod
    }

    def evaluate(self, expression: str) -> float:
        # Sanitize and tokenize input expression
        cleaned = expression.strip()
        tree = ast.parse(cleaned, mode='eval')
        return self._eval_node(tree.body)

    def _eval_node(self, node):
        if isinstance(node, ast.Constant):
            return node.value
        elif isinstance(node, ast.BinOp):
            op_type = type(node.op)
            if op_type not in self.ALLOWED_OPERATORS:
                raise ValueError(f"Unsupported operator: {op_type.__name__}")
            left = self._eval_node(node.left)
            right = self._eval_node(node.right)
            return self.ALLOWED_OPERATORS[op_type](left, right)
        raise ValueError("Invalid mathematical syntax")`,
    },
    demoType: 'calculator',
    status: 'Completed',
    completedDate: '2024',
  },
  {
    id: 'cybersecurity-projects',
    title: 'Cybersecurity Projects',
    subtitle: 'Network Port Scanner & Vulnerability Assessment Suite',
    category: 'Cybersecurity',
    shortDescription:
      'A suite of practical security tools including a multi-threaded TCP port scanner, service banner grabber, and defensive security auditing scripts.',
    fullDescription:
      'Developed as part of practical laboratory research in network security at the University of Juba, this suite inspects network endpoints for open service ports, banners, and exposed interfaces. It assists network administrators in identifying unpatched services and misconfigured firewall boundaries. Built with raw socket programming and defensive threat modeling principles.',
    technologies: ['Python', 'Socket API', 'Threading', 'Nmap Scripting', 'Bash', 'Wireshark'],
    keyFeatures: [
      'Multi-threaded TCP port scanner with configurable port ranges and timeout thresholds',
      'Service banner detection for identifying running service versions (SSH, HTTP, FTP)',
      'Security assessment report generation formatted with severity indicators',
      'Defensive firewall rule suggestion engine based on open port discovery',
      'Non-intrusive scanning mode designed for educational and authorized network testing',
    ],
    codeSnippet: {
      language: 'python',
      filename: 'net_port_scanner.py',
      code: `import socket
import sys
from concurrent.futures import ThreadPoolExecutor

COMMON_PORTS = {
    21: "FTP", 22: "SSH", 25: "SMTP", 53: "DNS",
    80: "HTTP", 110: "POP3", 443: "HTTPS", 3306: "MySQL"
}

def scan_port(host: str, port: int, timeout: float = 1.0):
    """Attempt TCP handshake to determine port availability."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(timeout)
            result = s.connect_ex((host, port))
            if result == 0:
                service = COMMON_PORTS.get(port, "Unknown Service")
                return {"port": port, "state": "OPEN", "service": service}
    except Exception as e:
        pass
    return None

def run_security_audit(target_ip: str, port_list: list):
    print(f"[*] Commencing defensive scan for target: {target_ip}")
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(scan_port, target_ip, p) for p in port_list]
        for f in futures:
            res = f.result()
            if res:
                print(f"[+] Found {res['port']}/TCP ({res['service']}) - OPEN")`,
    },
    demoType: 'portscanner',
    status: 'Completed',
    completedDate: '2024',
  },
  {
    id: 'c-programming-projects',
    title: 'C Programming Projects',
    subtitle: 'Cryptographic File Cipher & Memory-Safe Data Structures',
    category: 'C Programming',
    shortDescription:
      'Low-level systems software in ANSI C including a secure XOR/stream file encryption utility and memory-audited dynamic structures.',
    fullDescription:
      'A collection of low-level system software projects implemented in C to master hardware-level memory management, pointer manipulation, and foundational cryptographic algorithms. Includes a CLI file encryption/decryption tool that performs block-wise key stream masking, and custom linked-list and dynamic array implementations verified with zero memory leaks via Valgrind.',
    technologies: ['C (C99/C11)', 'GCC', 'Valgrind', 'Makefiles', 'POSIX APIs', 'Linux Terminal'],
    keyFeatures: [
      'Low-overhead symmetric file encryption utility with key expansion logic',
      'Robust error handling for file streams, buffer boundaries, and corrupted headers',
      'Zero dynamic memory leaks verified through Valgrind diagnostic profiling',
      'Custom implementation of memory-safe dynamically expanding data buffers',
      'Modular Makefile build setup with strict compilation flags (-Wall -Wextra -pedantic)',
    ],
    codeSnippet: {
      language: 'c',
      filename: 'file_cipher.c',
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 4096

/**
 * Encrypts/decrypts input file using cyclic key stream masking.
 */
int process_cipher(const char *in_path, const char *out_path, const char *key) {
    FILE *fin = fopen(in_path, "rb");
    if (!fin) {
        perror("Error opening source file");
        return -1;
    }

    FILE *fout = fopen(out_path, "wb");
    if (!fout) {
        perror("Error opening target file");
        fclose(fin);
        return -1;
    }

    size_t key_len = strlen(key);
    size_t key_idx = 0;
    unsigned char buffer[BUFFER_SIZE];
    size_t bytes_read;

    while ((bytes_read = fread(buffer, 1, BUFFER_SIZE, fin)) > 0) {
        for (size_t i = 0; i < bytes_read; ++i) {
            buffer[i] ^= (unsigned char)key[key_idx % key_len];
            key_idx++;
        }
        fwrite(buffer, 1, bytes_read, fout);
    }

    fclose(fin);
    fclose(fout);
    return 0; // Success
}`,
    },
    demoType: 'encryptor',
    status: 'Completed',
    completedDate: '2024',
  },
  {
    id: 'personal-website',
    title: 'Personal Portfolio Website',
    subtitle: 'Cybersecurity-Themed Interactive Portfolio & Terminal',
    category: 'Web Development',
    shortDescription:
      'A high-performance, dark cybersecurity-inspired personal portfolio featuring an interactive terminal emulator, cyber canvas, and modular architecture.',
    fullDescription:
      'Crafted to present Akok Mayol’s skills, projects, and academic background at the University of Juba. Built with React, TypeScript, and modern Tailwind CSS, it features an interactive terminal emulator supporting standard UNIX-style commands, an animated cyber network canvas, zero-pill typography, and responsive design across all devices.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'Motion', 'Lucide Icons'],
    keyFeatures: [
      'Dark cybersecurity aesthetic with emerald/cyan glowing accents and subtle cyber grid',
      'Interactive Terminal Emulator with command history and rich responses',
      'Interactive Canvas particle network representing digital nodes and packet relays',
      'Interactive project sandboxes enabling live in-browser testing of tools',
      'Fully responsive, accessible, and fast-loading architecture',
    ],
    codeSnippet: {
      language: 'typescript',
      filename: 'CyberCanvas.tsx',
      code: `// Interactive particle network simulating cybersecurity network topology
export const renderNetworkNodes = (ctx: CanvasRenderingContext2D, nodes: Node[]) => {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 120) {
        ctx.strokeStyle = \`rgba(16, 185, 129, \${1 - dist / 120 * 0.4})\`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
};`,
    },
    demoType: 'website',
    status: 'Active Development',
    completedDate: '2024–Present',
  },
];
