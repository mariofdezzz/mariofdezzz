// deno-lint-ignore-file no-explicit-any
import { Primitives } from '@/shared/domain/primitives.ts'

export abstract class AggregateRoot {
  toPrimitives(): Primitives<this> {
    return structuredClone(
      Object.entries(this).filter(([key]) => key !== 'domainEvents').reduce(
        (acc, [key, value]) => {
          if (value) acc[key] = value.toPrimitives()

          return acc
        },
        {} as any,
      ),
    )
  }

  toJSON(): Primitives<this> {
    return this.toPrimitives()
  }
}
