import { renderHook } from "@testing-library/react";
import { useAgents } from "./useAgents";
import { act } from "react-dom/test-utils";

describe("useAgents", () => {
  it("sets initial agents", () => {
    //ARRANGE
    const initialAgents = [{ name: "one" }, { name: "two" }];
    const { result } = renderHook(() => useAgents(initialAgents));

    //ASSERT
    expect(result.current.agents).toHaveLength(2);
  });

  it("can set active agent", () => {
    //ARRANGE
    const initialAgents = [{ name: "one" }, { name: "two" }];
    const { result } = renderHook(() => useAgents(initialAgents));

    expect(result.current.isAgentActive).not.toBeTruthy();
    //ACT
    act(() => {
      result.current.activateAgent("two");
    });

    //ASSERT
    expect(result.current.isAgentActive).toBeTruthy();
    expect(result.current.activeAgent?.name).toBe("two");
  });

  it("can change active agent", () => {
    //ARRANGE
    const initialAgents = [{ name: "one" }, { name: "two" }];
    const { result } = renderHook(() => useAgents(initialAgents));

    //ACT
    act(() => {
      result.current.activateAgent("two");
      result.current.activateAgent("one");
    });

    //ASSERT
    expect(result.current.activeAgent?.name).toBe("one");
  });

  it("can deactivate agent", () => {
    //ARRANGE
    const initialAgents = [{ name: "one" }, { name: "two" }];
    const { result } = renderHook(() => useAgents(initialAgents));

    //ACT
    act(() => {
      result.current.activateAgent("two");
      result.current.deactivateAgent();
    });

    //ASSERT
    expect(result.current.isAgentActive).not.toBeTruthy();
  });
});
