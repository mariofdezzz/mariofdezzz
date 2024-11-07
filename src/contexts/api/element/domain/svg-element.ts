import { Element } from '@/api/element/domain/element.ts'

const baseAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  width: '100%',
}

export class SVGElement extends Element {
  readonly tagName = 'svg'

  constructor(content: string = '', attributes: Record<string, string> = {}) {
    super(content, attributes)
    this.attributes = { ...baseAttributes, ...attributes }
    this.content = `
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${this.content}
      </div>
    </foreignObject>
    `
  }
}
