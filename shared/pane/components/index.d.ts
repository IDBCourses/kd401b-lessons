declare namespace Pane {
  type Tone = 'plum' | 'teal' | 'pink' | 'ink' | 'paper';
  type Lines = string | string[];
  interface PaneFrameProps { lines?: Lines; children?: string; tone?: Tone; size?: number; as?: 'h1' | 'h2' | 'h3' | 'p'; stagger?: boolean }
  interface SlideProps { tone?: 'paper' | 'ink' | 'plum' | 'teal' | 'pink'; number?: string | number; footer?: string; label?: string; children?: any }
  interface TitleSlideProps extends Omit<SlideProps, 'children'> { title: Lines; subtitle?: string; meta?: string }
  interface SectionSlideProps extends Omit<SlideProps, 'children'> { title: Lines }
  interface ContentSlideProps extends SlideProps { title: Lines; aside?: any; asideTitle?: string }
  interface FigureSlideProps extends SlideProps { title: Lines; figure: any; caption?: string }
  interface QuoteSlideProps extends Omit<SlideProps, 'children'> { quote: string; source?: Lines }
  interface CodeBlockProps { children: string; label?: string; size?: 'ui' | 'slide' }
  interface LogoProps { variant?: 'lockup' | 'mark'; height?: number; title?: string }
  interface ButtonProps { variant?: 'primary' | 'secondary' | 'quiet'; disabled?: boolean; onClick?: () => void; children: any }
  interface FieldProps { label: string; hint?: string; error?: string }
  interface TextFieldProps extends FieldProps { type?: string; value?: string; defaultValue?: string; placeholder?: string; onChange?: (e: any) => void }
  interface SelectProps extends FieldProps { options: Array<string | { value: string; label: string }> }
  interface CheckboxProps { label: string; hint?: string; checked?: boolean; defaultChecked?: boolean; disabled?: boolean }
  interface RadioProps { label: string; hint?: string; name: string; checked?: boolean; defaultChecked?: boolean }
  interface TabsProps { tabs: Array<{ id: string; label: string; content: any }>; defaultId?: string; label?: string }
  interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'danger'; title: string; children?: any }
  interface CardProps { title?: string; tone?: 'paper' | 'plum' | 'teal' | 'pink'; interactive?: boolean; as?: string; children?: any }
}
