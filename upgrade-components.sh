#!/bin/bash

# Lista de componentes sin la extensión .tsx
componentes=(
  alert avatar badge breadcrumb button calendar card
  checkbox collapsible data-picker data-table dialog
  dropdown-menu icon input label navigation-menu
  placeholder-pattern popover radio-group select
  separator sheet sidebar skeleton table textarea
  toggle-group toggle tooltip
)

for componente in "${componentes[@]}"; do
  echo "🔄 Actualizando: $componente"
  npx shadcn@latest add "$componente"
done

echo "✅ Todos los componentes fueron actualizados."
