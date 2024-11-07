import { SVGElement } from '@/api/element/domain/svg-element.ts'
import { gobalStyles } from '~/container/styles/global.ts'

export class CraftCreator {
  create(): string {
    return new SVGElement(`
      <style>
        ${gobalStyles}

        #carrousel {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 0;
          margin: 0;
        }
        video {
          border-radius: 5px;
        }
      </style>
      <ul id="carrousel">
        <li>
          <video 
            height="150" 
            autoplay="" 
            playinline="" 
            muted="" 
            loop="" 
          >
            <source src="https://readme.mariofdezzz.com/assets/halloween_dev.mov" />
          </video>
        </li>
      </ul>
    `).toString()
  }
}
