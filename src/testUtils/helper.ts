import { screen, within } from "@cbs-ui/jest-utils";

function verifyValueWithLabelDataItem(label: string, value: string): true | never {
  const labelEl = screen.getByText(label);
  const nextSiblingEl = labelEl?.nextSibling as HTMLElement;

  if (!nextSiblingEl) {
    throw new Error(`Label ${label} doesn't exist`);
  }

  const withinNextSiblingEl = within(nextSiblingEl);

  withinNextSiblingEl.getByText(new RegExp(`${value}`));

  return true;
}

export { verifyValueWithLabelDataItem };
