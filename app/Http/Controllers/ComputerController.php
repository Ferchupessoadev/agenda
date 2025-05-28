<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComputerRequest;
use App\Models\Computer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ComputerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Computer::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreComputerRequest $request)
    {

        $newComputer = new Computer();
        $newComputer->computer_type = $request->input('computerType');
        $newComputer->description = $request->description;
        $newComputer->possible_failures = $request->possibleFailures;
        $newComputer->date_time_arrival = $request->dateTimeArrival;
        $newComputer->date_time_finish = $request->dateTimeFinish;
        $newComputer->person_in_charge = $request->personInCharge;

        $path = $request->file('image')->store('images', 'public');

        $newComputer->image = $path;

        $newComputer->save();

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Computer $computer)
    {
        $path = $computer->image;
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
        $computer->delete();

        return back();
    }
}
