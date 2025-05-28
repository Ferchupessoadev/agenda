<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreComputerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'computerType' => 'required|string',
            'dateTimeArrival' => 'required|date|before:dateTimeFinish',
            'dateTimeFinish' => 'required|date|after:dateTimeArrival',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'required|string|max:255',
            'possibleFailures' => 'required|string|max:255',
            'personInCharge' => 'required|string|exists:users,name',
        ];
    }
}
