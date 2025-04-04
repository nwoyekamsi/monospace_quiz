
import { QuizQuestion } from '../contexts/QuizContext';

export const marketingQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What industry is your business in?',
    options: [
      {
        id: 'q1-a',
        title: 'Retail',
        description: 'Physical or online stores selling products directly to consumers'
      },
      {
        id: 'q1-b',
        title: 'Hospitality',
        description: 'Hotels, restaurants, entertainment venues'
      },
      {
        id: 'q1-c',
        title: 'Food & Beverage',
        description: 'Restaurants, cafes, food products'
      },
      {
        id: 'q1-d',
        title: 'Other',
        description: 'Other industry sectors'
      }
    ]
  },
  {
    id: 'q2',
    question: 'How would you describe the status of your marketing strategy?',
    options: [
      {
        id: 'q2-a',
        title: 'Fully Defined',
        description: 'Documented, and execution underway'
      },
      {
        id: 'q2-b',
        title: 'Key Ideas Outlined',
        description: 'But details still being finalized'
      },
      {
        id: 'q2-c',
        title: 'Initial Planning',
        description: 'Haven\'t started formal planning yet'
      }
    ]
  },
  {
    id: 'q3',
    question: 'Have you specifically defined your target audience segments?',
    options: [
      {
        id: 'q3-a',
        title: 'Yes, Detailed',
        description: 'With detailed personas and tailored messaging for each'
      },
      {
        id: 'q3-b',
        title: 'General Idea',
        description: 'We have a general idea, but segmentation isn\'t highly specific'
      },
      {
        id: 'q3-c',
        title: 'Standard Approach',
        description: 'We\'ll be using our standard audience targeting'
      }
    ]
  },
  {
    id: 'q4',
    question: 'Which digital channels are central to your campaign budget allocation?',
    options: [
      {
        id: 'q4-a',
        title: 'Strategic Mix',
        description: 'A strategic mix including performance ads, email, and content/SEO'
      },
      {
        id: 'q4-b',
        title: 'Focused Channels',
        description: 'Primarily focusing on one or two channels, like social media ads'
      },
      {
        id: 'q4-c',
        title: 'Undecided',
        description: 'Budget allocation for specific channels is still undecided'
      }
    ]
  },
  {
    id: 'q5',
    question: 'Are your website and landing pages optimized for campaign traffic?',
    options: [
      {
        id: 'q5-a',
        title: 'Dedicated Pages',
        description: 'Yes, dedicated landing pages are built/updated with performance testing'
      },
      {
        id: 'q5-b',
        title: 'Minor Updates',
        description: 'We\'ll update existing pages slightly, but no major overhaul planned'
      },
      {
        id: 'q5-c',
        title: 'Standard Site',
        description: 'Our standard website/app will handle the traffic'
      }
    ]
  },
  {
    id: 'q6',
    question: 'How are you planning to leverage email marketing for your campaign?',
    options: [
      {
        id: 'q6-a',
        title: 'Segmented Campaigns',
        description: 'Segmented campaigns with personalized offers based on behavior'
      },
      {
        id: 'q6-b',
        title: 'General Newsletter',
        description: 'A general newsletter blast to our entire list'
      },
      {
        id: 'q6-c',
        title: 'No Email Plan',
        description: 'We don\'t have a significant email marketing plan'
      }
    ]
  },
  {
    id: 'q7',
    question: 'What role will special offers or promotions play in your strategy?',
    options: [
      {
        id: 'q7-a',
        title: 'Curated Offers',
        description: 'Curated, potentially exclusive offers designed to drive conversions'
      },
      {
        id: 'q7-b',
        title: 'Standard Discounts',
        description: 'Standard discount codes or site-wide sales'
      },
      {
        id: 'q7-c',
        title: 'Undecided',
        description: 'We\'re unsure about specific promotions yet'
      }
    ]
  },
  {
    id: 'q8',
    question: 'How will you measure the success of your campaign performance?',
    options: [
      {
        id: 'q8-a',
        title: 'Specific KPIs',
        description: 'Tracking specific KPIs (ROAS, CPA, Conversion Rate) with attribution'
      },
      {
        id: 'q8-b',
        title: 'General Metrics',
        description: 'Monitoring overall sales and website traffic during the period'
      },
      {
        id: 'q8-c',
        title: 'Undefined Metrics',
        description: 'We haven\'t defined specific success metrics yet'
      }
    ]
  }
];
