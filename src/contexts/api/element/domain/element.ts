/**
 * Custom html Element implementation
 */
export abstract class Element {
  abstract readonly tagName: string
  attributes: Record<string, string> = {}
  content: string = ''

  constructor(content: string = '', attributes: Record<string, string> = {}) {
    this.attributes = { ...attributes }
    this.content = content
  }

  toString(): string {
    return `<${this.tagName} ${this.attributesToString()}>
${this.content}
</${this.tagName}>`
  }

  protected attributesToString(): string {
    return Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')
  }
}
