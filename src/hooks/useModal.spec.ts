import { act, renderHook } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {
  it("can toggle", () => {
    //ARRANGE
    const { result } = renderHook(() => useModal());
    let [isOpen] = result.current;
    const [, , toggle] = result.current;

    expect(isOpen).toBe(false);

    //ACT
    act(() => {
      toggle();
    });

    [isOpen] = result.current;
    //ASSERT
    expect(isOpen).toBe(true);
  });

  it("can set modal state", () => {
    //ARRANGE
    const { result } = renderHook(() => useModal());
    let [isOpen] = result.current;
    const [, setOpen] = result.current;

    expect(isOpen).toBe(false);

    //ACT
    act(() => {
      setOpen(true);
    });

    [isOpen] = result.current;
    //ASSERT
    expect(isOpen).toBe(true);
  });
});
